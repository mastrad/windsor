// app/api/demo-request/route.js
import { ServerClient } from "postmark";
import { NextResponse } from "next/server";
import {
  escapeHtml,
  getClientIp,
  getRateLimiter,
  isValidEmail,
  verifyTurnstile,
} from "@/utlis/formSecurity";

const ratelimit = getRateLimiter("demo-request", 2, "10 m");

export async function POST(request) {
  try {
    const ip = getClientIp(request);

    if (ratelimit) {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, dateOfBirth, email, phone, message, turnstileToken } = body;

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

    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Human verification failed. Please try again." },
        { status: 403 }
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

    const client = new ServerClient(apiKey);
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
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
