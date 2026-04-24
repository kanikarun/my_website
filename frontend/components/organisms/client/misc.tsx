import React from 'react';
import Marquee from 'react-fast-marquee';

import { Image } from '@/components/atoms/image';
import { Link } from '@/i18n/navigation';

interface Props {
  data: ClientLogoProps[];
  direction?: 'left' | 'right';
}

export const ClientMarquee: React.FC<Props> = ({ data, direction }) => {
  return (
    <Marquee gradient autoFill direction={direction} gradientColor="var(--color-marquee-gradient)" gradientWidth={100}>
      {data.map(x => (
        <ClientLogo key={x.name} {...x} />
      ))}
    </Marquee>
  );
};

interface ClientLogoProps {
  name: string;
  image: { light: string; dark: string };
  link: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, image, link }) => {
  return (
    <div className="px-4">
      <Link href={link || '#'} target={link ? '_blank' : '_self'} className="relative">
        <div className="relative">
          <Image
            style={{ width: 'auto' }}
            width={0}
            height={64}
            className="max-w-30 h-16 dark:hidden object-contain"
            src={image.light}
            alt={name}
          />
          <Image
            style={{ width: 'auto' }}
            width={0}
            height={64}
            className="max-w-30 h-16 hidden dark:block object-contain"
            src={image.dark}
            alt={name}
          />
        </div>
      </Link>
    </div>
  );
};
