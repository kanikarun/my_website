'use client';

import { GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import { Locale } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Cambodia from '@/public/images/cambodia.png';
import UK from '@/public/images/united-kingdom.png';

import { useSwitchLocale } from '../hooks/use-switch-locale';

const languages = [
  { locale: 'km', key: 'kh', name: 'ខ្មែរ', img: Cambodia },
  { locale: 'en', key: 'gb', name: 'English', img: UK }
];

export const LocaleToggle: React.FC = () => {
  const { locale, switchLocale } = useSwitchLocale();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="theme-toggle" size="icon">
            <GlobeIcon className="size-5 text-white" />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-100 w-30" align="end">
        {languages.map(x => (
          <DropdownMenuItem
            key={x.key}
            className="flex cursor-pointer space-x-2"
            onClick={() => switchLocale(x.locale as Locale)}
          >
            <Image className="h-4.5 w-auto" width={20} height={15} src={x.img} alt={locale} />
            <span>{x.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
