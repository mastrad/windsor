import { NextResponse } from "next/server";
import { ServerClient } from "postmark";
import { getClientIp, getRateLimiter, verifyTurnstile } from "@/utlis/formSecurity";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ratelimit = getRateLimiter("contact", 3, "10 m");

export async function POST(req) {
  try {
    const client = new ServerClient(process.env.POSTMARK_API_KEY);
    const ip = getClientIp(req);

    if (ratelimit) {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
    }

    const { name, email, subject, message, turnstileToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "Security check failed. Please refresh and try again." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await client.sendEmail({
      From: "hello@windsortaekwondo.com",
      To: "hello@windsortaekwondo.com",
      Subject: `New Contact Form Submission: ${safeSubject || "No Subject"}`,
      HtmlBody: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong> ${safeMessage}</p>`,
      TextBody: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      ReplyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
