import { getTranslations } from 'next-intl/server';

import { TemplateHeaderSection } from '@/components/templates';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

import { ContactAddress } from './components/contact-address';
import { ContactForm } from './components/contact-form';
import { ContactInfo } from './components/contact-info';

export async function Contact() {
  const t = await getTranslations('page.contact');

  return (
    <div>
      <TemplateHeaderSection
        tagline={t('header-section.tagline')}
        title={t('header-section.title')}
        description={t('header-section.description')}
        image="/images/contact-header-section.png"
      />

      <div className="container py-8 lg:py-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="space-y-6">
          <ContactAddress title={t('contact-address.title')} />
          <ContactInfo title={t('connect.title')} />
          <Card className="bg-primary/10">
            <CardContent>
              <CardTitle className="font-bold text-primary dark:text-white">{t('alert.title')}</CardTitle>
              <br />
              <CardDescription className="text-muted-foreground">{t('alert.description')}</CardDescription>
            </CardContent>
          </Card>
        </div>

        <ContactForm />
      </div>
    </div>

  );
}