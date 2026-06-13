import { NextResponse } from "next/server";
import { ServerClient } from "postmark";
import { getClientIp, getRateLimiter, verifyTurnstile } from "@/utlis/formSecurity";

const ratelimit = getRateLimiter("contact", 3, "10 m");

export async function POST(req) {
  try {
    const apiKey = process.env.POSTMARK_API_KEY;

    // Safety check – fails fast with a clean message if the env var is missing
    if (!apiKey) {
      console.error("Missing POSTMARK_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

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

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Human verification failed. Please try again." },
        { status: 403 }
      );
    }

    const client = new ServerClient(apiKey);

    // Send email via Postmark
    await client.sendEmail({
      From: "hello@windsortaekwondo.com", // Must match a verified sender in Postmark
      To: "hello@windsortaekwondo.com",
      Subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      TextBody: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      ReplyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
