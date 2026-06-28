import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(token) {
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    const client = new ServerClient(process.env.POSTMARK_API_KEY);
    const { name, email, subject, message, turnstileToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(turnstileToken);
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
