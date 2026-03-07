// app/api/demo-request/route.js
import { Client } from 'postmark';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, dateOfBirth, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Create a new instance of the Postmark client
    const client = new Client(process.env.POSTMARK_API_KEY);

    // Prepare email content
    const emailContent = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${dateOfBirth ? `<p><strong>Date of Birth:</strong> ${dateOfBirth}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    `;

    // Send the email using Postmark
    await client.sendEmail({
      From: process.env.FROM_EMAIL || 'hello@windsortaekwondo.com',
      To: process.env.TO_EMAIL || 'hello@windsortaekwondo.com',
      Subject: `Free Trial Request from ${name} at`,
      HtmlBody: emailContent,
      TextBody: emailContent.replace(/<[^>]*>/g, ''),
      ReplyTo: email
    });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending trial request:', error);
    return NextResponse.json(
      { error: 'Failed to send trial request. Please try again.' },
      { status: 500 }
    );
  }
}