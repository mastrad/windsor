import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, verifyTurnstile } from "@/utlis/formSecurity";
import { submitToGoogleForm } from "@/utlis/googleForms";

// Windsor TKD - Contact Form. Field IDs come from the form's pre-filled link.
const FORM_ID =
  "1FAIpQLSd9nZuxQiZvRcLpSgE0WZHD_L4jjbHfwUAtL4NMQ0qJeCwnGw";
const FIELD = {
  name: "entry.1148927156",
  email: "entry.1435747053",
  subject: "entry.1597742699",
  message: "entry.636337236",
};

export async function POST(req) {
  try {
    const ip = getClientIp(req);

    if (!(await checkRateLimit("contact", 3, "10 m", ip))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
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

    await submitToGoogleForm(FORM_ID, {
      [FIELD.name]: name,
      [FIELD.email]: email,
      [FIELD.subject]: subject,
      [FIELD.message]: message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Server-side only - the client still gets a generic message.
    console.error("[contact] submission failed:", error?.message || error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
