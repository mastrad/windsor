import { NextResponse } from "next/server";
import {
  FIELD_LIMITS,
  checkRateLimit,
  findOversizedField,
  getClientIp,
  getProtectionStatus,
  isValidEmail,
  normalizeField,
  verifyTurnstile,
} from "@/utlis/formSecurity";
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
    // Both abuse controls fail open individually. If neither one is configured
    // this endpoint would forward anything to anyone, so refuse rather than
    // run unprotected - getProtectionStatus() logs which one is missing.
    if (!getProtectionStatus().any) {
      return NextResponse.json(
        { error: "This form is temporarily unavailable. Please email us instead." },
        { status: 503 }
      );
    }

    const ip = getClientIp(req);

    if (!(await checkRateLimit("contact", 3, "10 m", ip))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { turnstileToken } = body;

    const name = normalizeField(body.name);
    const email = normalizeField(body.email);
    const subject = normalizeField(body.subject);
    const message = normalizeField(body.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const oversized = findOversizedField({ name, email, subject, message });
    if (oversized) {
      return NextResponse.json(
        {
          error: `That ${oversized} is too long (maximum ${FIELD_LIMITS[oversized]} characters).`,
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
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
