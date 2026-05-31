// app/api/demo-request/route.js
import { ServerClient } from "postmark";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ---------------------------------------------------------------------------
// Rate limiter – 2 requests per IP per 10 minutes
// Requires UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in your env vars.
// Free tier at https://upstash.com is sufficient for a contact form.
// ---------------------------------------------------------------------------
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "10 m"),
  analytics: false,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Escape HTML special characters to prevent injection in email bodies. */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Basic email format check. */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Verify the Cloudflare Turnstile token server-side. */
async function verifyTurnstile(token, remoteip) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request) {
  try {
    // ── 1. Rate limiting ──────────────────────────────────────────────────
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const { success: withinLimit } = await ratelimit.limit(ip);
    if (!withinLimit) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // ── 2. Parse body ─────────────────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, dateOfBirth, email, phone, message, turnstileToken } = body;

    // ── 3. Validate required fields ───────────────────────────────────────
    if (!name || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── 4. Turnstile verification ─────────────────────────────────────────
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Human verification required." },
        { status: 400 }
      );
    }

    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "Human verification failed. Please try again." },
        { status: 403 }
      );
    }

    // ── 5. Build email (with escaped values) ──────────────────────────────
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeDob = escapeHtml(dateOfBirth);
    const safeMessage = escapeHtml(message);

    const emailContent = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeDob ? `<p><strong>Date of Birth:</strong> ${safeDob}</p>` : ""}
      ${safeMessage ? `<p><strong>Message:</strong> ${safeMessage}</p>` : ""}
    `;

    // ── 6. Send via Postmark ──────────────────────────────────────────────
    const client = new ServerClient(process.env.POSTMARK_API_KEY);

    await client.sendEmail({
      From: process.env.FROM_EMAIL || "hello@windsortaekwondo.com",
      To: process.env.TO_EMAIL || "hello@windsortaekwondo.com",
      Subject: `Free Trial Request from ${safeName}`,
      HtmlBody: emailContent,
      TextBody: emailContent.replace(/<[^>]*>/g, ""),
      ReplyTo: safeEmail,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    // Log the real error server-side only — never expose it to the client
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}