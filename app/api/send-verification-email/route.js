import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, plan = "" } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    
    // Create a JWT token with the email and plan
    const token = jwt.sign(
      { email, plan, timestamp: Date.now() },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Base URL for the main site
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://spotwizz.com';
    
    // Create verification URL that points to the main site
    const verificationUrl = `${baseUrl}/email-verification?token=${token}${plan ? `&ref=${plan}` : ''}`;
    
    // Generate a unique Message-ID
    const messageId = `${Date.now()}.${Math.random().toString(36).substring(2)}@spotwizz.com`;
    
    // Format date according to RFC 5322
    const date = new Date().toUTCString();
    
    // Send email using Postmark API
    const postmarkApiKey = process.env.POSTMARK_API_KEY;
    if (!postmarkApiKey) {
      console.error("Postmark API key is missing");
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 });
    }
    
    const fromEmail = process.env.FROM_EMAIL || 'support@spotwizz.com';
    const fromName = process.env.FROM_NAME || 'Spotwizz';
    
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkApiKey
      },
      body: JSON.stringify({
        From: `${fromName} <${fromEmail}>`,
        To: email,
        Subject: 'Verify your email address',
        HtmlBody: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Spotwizz Account</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      text-align: center;
      padding: 20px 0;
    }
    .logo {
      width: 150px;
      margin: 0 auto;
    }
    .content {
      padding: 20px;
    }
    .button {
      display: inline-block;
      background-color: #12715b;
      color: #ffffff !important;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 6px;
      font-weight: 500;
      margin: 20px 0;
      text-align: center;
    }
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #777;
      padding: 20px;
      border-top: 1px solid #eee;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
      }
      .content {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://spotwizz.com/assets/images/common/logo-light.svg" alt="Spotwizz" class="logo">
    </div>
    <div class="content">
      <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Welcome to Spotwizz!</h1>
      
      <p>You're receiving this email because you've recently signed up for a Spotwizz account. Please confirm your email by using the button below.</p>
      
      <div class="button-container">
        <a href="${verificationUrl}" class="button">Verify Email Address</a>
      </div>
      
      <p>This step adds extra security to your account by verifying you own this email address.</p>
      
      <p>If you have any questions about why you are receiving this email, or if you're having any trouble verifying your email using the button above, <a href="https://spotwizz.com/contact" style="color: #12715b; text-decoration: underline;">get in touch</a>.</p>
      
      <p>Thanks,<br>Spotwizz Team</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Spotwizz. All rights reserved.</p>
      <p>If you didn't create an account with Spotwizz, please ignore this email.</p>
    </div>
  </div>
</body>
</html>
        `,
        TextBody: `
Welcome to Spotwizz!

You're receiving this email because you've recently signed up for a Spotwizz account. Please confirm your email by using the link below.

${verificationUrl}

This step adds extra security to your account by verifying you own this email address.

If you have any questions about why you are receiving this email, or if you're having any trouble verifying your email, get in touch: https://spotwizz.com/contact

Thanks,
Spotwizz Team

© ${new Date().getFullYear()} Spotwizz. All rights reserved.
If you didn't create an account with Spotwizz, please ignore this email.
        `,
        MessageStream: 'outbound',
        MessageID: messageId,
        Date: date,
        Headers: [
          {
            Name: "X-Mailer",
            Value: "Spotwizz Email Service"
          },
          {
            Name: "List-Unsubscribe",
            Value: `<${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}>`
          },
          {
            Name: "Precedence", 
            Value: "transactional"
          },
          {
            Name: "X-Auto-Response-Suppress",
            Value: "OOF, AutoReply"
          },
          {
            Name: "X-PM-Tag",
            Value: "account-verification"
          },
          {
            Name: "X-Transactional",
            Value: "true"
          },
          {
            Name: "MIME-Version",
            Value: "1.0"
          },
          {
            Name: "X-Content-Type-Options",
            Value: "nosniff"
          },
          {
            Name: "Organization",
            Value: "Spotwizz"
          },
          {
            Name: "Feedback-ID",
            Value: "account-verification:spotwizz:postmark:transactional"
          }
        ]
      })
    });
    
    const responseData = await response.json();
    if (!response.ok) {
      console.error("Postmark API error:", responseData);
      return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 });
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: "Verification email sent"
    });
  } catch (error) {
    console.error("Error sending verification email:", error);
    return NextResponse.json({
      error: "Failed to send verification email"
    }, { status: 500 });
  }
}