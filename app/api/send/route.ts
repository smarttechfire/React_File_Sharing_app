import { NextResponse } from 'next/server';
import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const responseData = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'smarttechcoding@resend.dev',
      to: [responseData.emailToSend],
      subject: responseData?.userName+" share file with you",
      react: EmailTemplate({ responseData }),
    });
    console.log(data);
    console.log("HI My Loves Mounisha")
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
