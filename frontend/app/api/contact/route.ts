import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env.mjs';
import { recaptchaVerify } from '@/lib/recaptcha';

const BOT_TOKEN = env.NEXT_TELEGRAM_TOKEN;
const CHAT_ID = env.NEXT_TELEGRAM_CHAT_ID;
// const GROUP_ID = env.NEXT_TELEGRAM_GROUP_ID;

type ContactSchema = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  interests?: string;
  message: string;
  recaptchaToken?: string;
};

const buildConfig = (body: ContactSchema, chatId: string) => {
  const { email, fullName, message, phone, company, interests }: ContactSchema = body;
  return {
    baseURL: 'https://api.telegram.org',
    params: {
      text: `Fullname: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nInterests: ${interests}\nMessage: ${message}`,
      chat_id: chatId
    }
  };
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactSchema = await req.json();
    const { recaptchaToken = '', ...rest } = body;

    const verify = await recaptchaVerify(recaptchaToken);

    if (!verify.success) {
      console.error('[contact] reCAPTCHA failed:', verify.message);
      return NextResponse.json({ message: 'Fail reCAPTCHA verification' }, { status: 400 });
    }

    const url = `bot${BOT_TOKEN}/sendMessage`;
    const sends = [axios.post(url, {}, buildConfig(rest, CHAT_ID))];
    // if (GROUP_ID) sends.push(axios.post(url, {}, buildConfig(rest, GROUP_ID)));
    await Promise.all(sends);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (e) {
    console.error('[contact] error:', e);
    return NextResponse.json({ message: 'Message sent fail. ' }, { status: 400 });
  }
}