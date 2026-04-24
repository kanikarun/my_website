import { Locale } from 'next-intl';

import { BannerResponse, fetchAPI } from '@/strapi';

import { INavigation, NavigationResponse } from './navigation.interface';

export async function getNavigation(locale: Locale = 'en'): Promise<INavigation | null> {
  try {
    const res = (await fetchAPI('/navigation', { populate: '*', locale })) as NavigationResponse;
    return res.data?.attributes ?? null;
  } catch {
    return null;
  }
}

export async function getBanner(locale: Locale = 'en'): Promise<BannerResponse | null> {
  try {
    return (await fetchAPI('/banner', { locale })) as BannerResponse;
  } catch {
    return null;
  }
}
