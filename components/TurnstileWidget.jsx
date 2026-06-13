// components/TurnstileWidget.jsx
"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile widget.
 *
 * Props:
 *  - onVerify(token: string)  — called when the user passes the challenge
 *  - onExpire()               — called when the token expires (re-verify needed)
 *  - onError()                — called on a Turnstile error
 *  - theme                    — "light" | "dark" | "auto"  (default: "auto")
 */
export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  theme = "auto",
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  // Keep the latest callbacks available without re-running the render effect below.
  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    // Load the Turnstile script once
    const SCRIPT_ID = "cf-turnstile-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    function renderWidget() {
      if (!containerRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        theme,
        callback: (token) => onVerifyRef.current?.(token),
        "expired-callback": () => onExpireRef.current?.(),
        "error-callback": () => onErrorRef.current?.(),
      });
    }

    // If Turnstile is already loaded, render immediately; otherwise wait
    if (window.turnstile) {
      renderWidget();
    } else {
      window.onloadTurnstileCallback = renderWidget;
      // Append the callback param if the script is already in the DOM
      const existing = document.getElementById(SCRIPT_ID);
      if (existing && !existing.src.includes("onload=")) {
        existing.src += "&onload=onloadTurnstileCallback";
      }
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // Only re-render the widget if the theme changes — NOT when the parent
    // passes new inline onVerify/onExpire/onError functions on every re-render
    // (e.g. after setTurnstileToken triggers a state update). Re-running this
    // effect destroys and recreates the widget, which resets a checked
    // checkbox back to unchecked.
  }, [theme]);

  return <div ref={containerRef} />;
}
