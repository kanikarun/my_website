'use server';

import axios from 'axios';

import { env } from '@/env.mjs';

/**
 *
 * @link https://developers.google.com/recaptcha/docs/verify
 * @link https://stackoverflow.com/a/76150064
 */
export async function recaptchaVerify(token?: string | null) {
  try {
    const { data } = await axios.post<{ success: boolean }>(
      'https://www.google.com/recaptcha/api/siteverify',
      {},
      { params: { secret: env.NEXT_RECAPTCHA_SECRET_KEY, response: token } }
    );

    if (!data.success) {
      return { message: 'Verification Fail', success: false };
    }

    return { message: 'Verification Success', success: true };
     
  } catch (error) {
    return { message: 'Something went wrong!', success: false };
  }
}