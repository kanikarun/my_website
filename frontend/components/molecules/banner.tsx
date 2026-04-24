'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { Link } from '@/i18n/navigation';
import { BannerResponse } from '@/strapi';

interface Props {
  banner?: BannerResponse;
}

export const Banner: React.FC<Props> = ({ banner }) => {
  const { title, link, show } = banner?.data?.attributes || {};
  const [toggle, setToggle] = useState(true);

  if (!banner) return null;

  return (
    <div className={`${toggle && show ? 'block' : 'hidden'} relative bg-primary-500`}>
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span>{title}</span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href={link || '#'} className="font-bold text-white underline">
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pr-1 pt-1 sm:items-start sm:pr-2 sm:pt-1">
          <button
            type="button"
            onClick={() => setToggle(false)}
            className="flex rounded-md p-2 hover:bg-primary-500 focus:outline-hidden focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};