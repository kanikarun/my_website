'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as v from 'valibot';

import { isOptionalString, isRequiredEmail, isRequiredPhone, isRequiredString } from '@/utils/validation';

const schema = (t: (key: string) => string) =>
  v.object({
    fullName: isRequiredString(t('full-name-error')),
    email: isRequiredEmail(t('email-error')),
    phone: isRequiredPhone(t('phone-error'), t('phone-format-error')),
    company: isOptionalString(),
    message: isRequiredString(t('message-error')),
    interests: isRequiredString(t('interests-error'))
  });

export type ContactFormInput = v.InferOutput<ReturnType<typeof schema>>;

export function useContactForm() {
  const t = useTranslations('page.contact.form');
  return useForm<ContactFormInput>({
    resolver: valibotResolver(schema(t as (key: string) => string)),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      interests: '',
      company: '',
      message: ''
    }
  });
}