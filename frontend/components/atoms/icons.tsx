'use client';

import ConsultantSvg from '@/public/icons/consultant.svg';
import LinkedinIcon from '@/public/icons/linkedin.svg';
import MobileDevSvg from '@/public/icons/mobile-dev.svg';
import SoftwareDevSvg from '@/public/icons/software-dev.svg';
import WebDevSvg from '@/public/icons/web-dev.svg';

export const LinkedIn = () => (
  <LinkedinIcon className="h-6 w-6 text-gray-400 dark:hover:text-gray-200 hover:text-black" />
);

export const Consultant = () => <ConsultantSvg className="h-full w-full object-cover" />;
export const MobileDev = () => <MobileDevSvg className="h-full w-full object-cover" />;
export const SoftwareDev = () => <SoftwareDevSvg className="h-full w-full object-cover" />;
export const WebDev = () => <WebDevSvg className="h-full w-full object-cover" />;