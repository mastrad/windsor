/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy.
 *
 * The allowlists below are derived from what the live pages actually load:
 * Google Tag Manager (plus the Google Ads/Analytics tags it fires), Cloudflare
 * Turnstile, and self-hosted assets. Nothing else.
 *
 * `frame-src` is the important one. It is what stops a third party — whether it
 * arrives via a GTM tag, the hosting layer, or anything else — from rendering a
 * full-page overlay on top of this site. If something tries, the browser blocks
 * it and logs "Refused to frame '<url>' because it violates the following
 * Content Security Policy directive", which also names the culprit.
 *
 * When adding a legitimate third-party tool later, add its host to the specific
 * directive it needs. Do not widen a directive to `*`, and do not add
 * 'unsafe-eval' to production.
 */
const contentSecurityPolicy = [
  "default-src 'self'",

  // 'unsafe-inline' is required: app/layout.js injects the JSON-LD structured
  // data and the GTM bootstrap via dangerouslySetInnerHTML, and these routes are
  // statically generated, so a per-request nonce isn't available without adding
  // middleware. 'unsafe-eval' is dev-only (Turbopack HMR needs it).
  [
    "script-src 'self' 'unsafe-inline'",
    isDev ? "'unsafe-eval'" : "",
    "https://www.googletagmanager.com",
    "https://challenges.cloudflare.com",
    "https://www.google-analytics.com",
    "https://www.googleadservices.com",
    "https://googleads.g.doubleclick.net",
  ]
    .filter(Boolean)
    .join(" "),

  // The theme ships inline styles throughout (uni-core utilities + style props).
  "style-src 'self' 'unsafe-inline'",

  // data:/blob: for inlined icons; the Google hosts are conversion/analytics pixels.
  [
    "img-src 'self' data: blob:",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.google.com",
    "https://www.google.co.uk",
    "https://googleads.g.doubleclick.net",
  ].join(" "),

  // Fonts are self-hosted under public/assets/fonts — no external font CDN.
  "font-src 'self' data:",

  [
    "connect-src 'self'",
    isDev ? "ws://localhost:* http://localhost:*" : "",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://challenges.cloudflare.com",
  ]
    .filter(Boolean)
    .join(" "),

  // Turnstile renders its challenge in an iframe; GTM uses one for its
  // <noscript> fallback. Nothing else may be framed on this site.
  [
    "frame-src 'self'",
    "https://challenges.cloudflare.com",
    "https://www.googletagmanager.com",
    "https://td.doubleclick.net",
  ].join(" "),

  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Nobody may embed this site in a frame (clickjacking).
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    // Two years, subdomains included. `preload` is deliberately omitted: it is
    // effectively irreversible and should be a separate, considered decision.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Redundant with frame-ancestors on modern browsers; kept for older ones.
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },
];

const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
