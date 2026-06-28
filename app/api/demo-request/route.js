import { ServerClient } from "postmark";
import { NextResponse } from "next/server";

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, dateOfBirth, email, phone, message, turnstileToken } = body;

    if (!name || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const turnstileOk = await verifyTurnstile(turnstileToken);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "Security check failed. Please refresh and try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.POSTMARK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const client = new ServerClient(apiKey);

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeDob = escapeHtml(dateOfBirth);
    const safeMessage = escapeHtml(message);

    const emailContent = `
      <h2>New Free Trial Request</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeDob ? `<p><strong>Date of Birth:</strong> ${safeDob}</p>` : ""}
      ${safeMessage ? `<p><strong>Message:</strong> ${safeMessage}</p>` : ""}
    `;

    await client.sendEmail({
      From: process.env.FROM_EMAIL || "hello@windsortaekwondo.com",
      To: process.env.TO_EMAIL || "hello@windsortaekwondo.com",
      Subject: `Free Trial Request from ${safeName}`,
      HtmlBody: emailContent,
      TextBody: `New Free Trial Request\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate of Birth: ${dateOfBirth}\nMessage: ${message || ""}`,
      ReplyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send trial request. Please try again." },
      { status: 500 }
    );
  }
}
