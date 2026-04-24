import { siteConfig } from '@/config/site-config';

import { ContactHeader } from './contact-header';

interface ContactAddressProps {
  title: string;
}

export function ContactAddress({ title }: ContactAddressProps) {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.4920790496121!2d104.9393986710722!3d11.552993198996539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1775546498171!5m2!1sen!2skh';

  return (
    <div className="w-full space-y-4">
      <ContactHeader title={title} description={siteConfig.address} />
      <div className="relative sm:aspect-3/1 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}