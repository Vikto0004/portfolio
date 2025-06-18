import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type RequestBody = { name: string; email: string; message: string };

export async function POST(request: NextRequest) {
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();
  } catch (e: any) {
    console.error('❌ SMTP verify failed:', e);
    return new NextResponse(JSON.stringify({ error: `SMTP verify failed: ${e.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, message } = (await request.json()) as RequestBody;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Нове повідомлення від ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
