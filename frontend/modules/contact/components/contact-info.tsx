import { Mail, Send } from 'lucide-react';
import React, { ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site-config';
import { Link } from '@/i18n/navigation';

import { ContactHeader } from './contact-header';

export const ContactInfo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="space-y-4">
      <ContactHeader title={title} />
      <ContactCard
        title="Telegram"
        description="@oneworldcambodia"
        icon={<Send size={22} />}
        href={siteConfig.telegram}
      />
      <ContactCard
        title="Email Us"
        description="hello@odookh.com"
        icon={<Mail size={22} />}
        href={`mailto:${siteConfig.email}`}
      />
    </div>
  );
};

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

function ContactCard({ icon, title, description, href }: ContactCardProps) {
  const Wrapper = href ? Link : 'div';

  return (
    <Wrapper href={href as string} className={href ? 'block' : ''}>
      <Card className="dark:bg-navy-blue/50 dark:hover:bg-navy-blue/80 p-4 transition-colors">
        <CardContent className="flex items-center px-0 space-x-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            {icon}
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="leading-none font-semibold text-card-foreground">{title}</h5>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
}