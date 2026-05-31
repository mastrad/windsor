// app/api/demo-request/route.js
import { ServerClient } from "postmark";
import { NextResponse } from "next/server";

// --- Add this helper ---
async function verifyTurnstile(token, ip) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip, // optional but recommended
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, dateOfBirth, email, phone, message, turnstileToken } = body;

    // --- Verify CAPTCHA first, before doing anything else ---
    const ip =
      request.headers.get("cf-connecting-ip") ||   // real IP on Cloudflare
      request.headers.get("x-forwarded-for") ||
      "unknown";

    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const apiKey = process.env.POSTMARK_API_KEY;
    if (!apiKey) {
      console.error("Missing POSTMARK_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const client = new ServerClient(apiKey);

    const emailContent = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${dateOfBirth ? `<p><strong>Date of Birth:</strong> ${dateOfBirth}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
    `;

    await client.sendEmail({
      From: process.env.FROM_EMAIL || "hello@windsortaekwondo.com",
      To: process.env.TO_EMAIL || "hello@windsortaekwondo.com",
      Subject: `Free Trial Request from ${name}`,
      HtmlBody: emailContent,
      TextBody: emailContent.replace(/<[^>]*>/g, ""),
      ReplyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending trial request:", error);
    return NextResponse.json(
      { error: "Failed to send trial request. Please try again." },
      { status: 500 }
    );
  }
}