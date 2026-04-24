'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslations } from 'next-intl';

import { FieldInput } from '@/components/molecules/field-input';
import { FieldSelect } from '@/components/molecules/field-select';
import { FieldTextarea } from './field-textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FieldGroup } from '@/components/ui/field';
import { env } from '@/env.mjs';

import { useContact } from '../hook/use-contact';

export function ContactForm() {
  const { control, handleSubmit, onSubmit, isSubmitting, recaptchaRef } = useContact();
  const t = useTranslations('page.contact.form');
  const interests = ['Odoo ERP', 'Web Dev', 'Mobile App', 'Consulting'];

  return (
    <Card className="h-full w-full border-border dark:bg-navy-blue/50 text-card-foreground shadow-sm transition-colors duration-300">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col gap-5">
            <FieldInput
              required
              label={t('full-name')}
              name="fullName"
              control={control}
              placeholder={t('full-name-placeholder')}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FieldInput required label={t('email')} name="email" control={control} placeholder={t('email-placeholder')} />
              <FieldInput required control={control} name="phone" label={t('phone')} placeholder={t('phone-placeholder')} />
            </div>
            <FieldInput label={t('company')} name="company" placeholder={t('company-placeholder')} control={control} />
            <FieldSelect
              required
              label={t('interests')}
              name="interests"
              control={control}
              options={interests}
            />
            <FieldTextarea
              required
              label={t('message')}
              placeholder={t('message-placeholder')}
              name="message"
              control={control}
            />
            <ReCAPTCHA
              className="absolute"
              ref={recaptchaRef}
              sitekey={env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
              size="invisible"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}