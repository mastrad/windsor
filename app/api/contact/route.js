import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_API_KEY);

export async function POST(req) {
  try {

    console.log("Postmark API Key:", process.env.POSTMARK_API_KEY);
    const { name, email, subject, message } = await req.json();

    console.log("Received form data:", { name, email, subject, message });

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email via Postmark
    const response = await client.sendEmail({
      From: "hello@windsortaekwondo.com", // Must match a verified sender in Postmark
      To: "hello@windsortaekwondo.com", // Replace with your email
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