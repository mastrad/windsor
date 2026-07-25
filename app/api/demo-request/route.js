import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, verifyTurnstile } from "@/utlis/formSecurity";
import { submitToGoogleForm } from "@/utlis/googleForms";

// Windsor TKD - Free Trial Requests. This form was duplicated from the contact
// form, so it reuses the same entry IDs for different questions - note that
// entry.636337236 is the email here, not the message.
const FORM_ID =
  "1FAIpQLSed17AO1_SQ-Gsf32SITkLUpc1EOCCdNF71X4jtH22O3CPlZw";
const FIELD = {
  name: "entry.1148927156",
  dateOfBirth: "entry.1435747053",
  phone: "entry.1597742699",
  email: "entry.636337236",
  message: "entry.433108754",
};

export async function POST(request) {
  try {
    const ip = getClientIp(request);

    if (!(await checkRateLimit("demo-request", 2, "10 m", ip))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, dateOfBirth, email, phone, message, turnstileToken } = body;

    if (!name || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { error: "Required fields are missing" },
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
      [FIELD.dateOfBirth]: dateOfBirth,
      [FIELD.phone]: phone,
      [FIELD.email]: email,
      [FIELD.message]: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send trial request. Please try again." },
      { status: 500 }
    );
  }
}
