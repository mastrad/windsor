import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

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

    const client = new ServerClient(apiKey);

    const { name, email, subject, message } = await req.json();

    console.log("Received form data:", { name, email, subject, message });

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email via Postmark
    const response = await client.sendEmail({
      From: "hello@windsortaekwondo.com", // Must match a verified sender in Postmark
      To: "hello@windsortaekwondo.com",
      Subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      TextBody: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Postmark response:", response);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}