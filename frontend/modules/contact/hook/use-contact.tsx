'use client';

import axios from 'axios';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { env } from '@/env.mjs';

import { ContactFormInput, useContactForm } from './use-contact-form';

export function useContact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useContactForm();

  const onSubmit = async (data: ContactFormInput) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        '/api/contact',
        { ...data, recaptchaToken },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.status === 200) {
        alert('Your message has been sent!');
        form.reset();
      } else {
        throw new Error('Something went wrong!');
      }
    } catch {
      alert('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...form,
    onSubmit,
    isSubmitting,
    recaptchaRef,
    siteKey: env.NEXT_PUBLIC_RECAPTCHA_KEY || ''
  };
}