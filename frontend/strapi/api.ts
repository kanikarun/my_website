import { Locale } from 'next-intl';
import { stringify } from 'qs';

import { env } from '@/env.mjs';

import type { ConfigResponse, IConfig } from './interface';

export const getStaticURL = (path = '') => {
  return `${env.NEXT_STRAPI_URL || 'https://strapi.oneworldsoftware.com'}${path}`;
};

export const fetchAPI = async <T = unknown>(path: string, urlParamsObject = {}, options = {}): Promise<T> => {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.NEXT_STRAPI_TOKEN}`
    },
    ...options
  };

  // Build request URL
  const queryString = stringify(urlParamsObject);
  const requestUrl = getStaticURL(`/api${path}${queryString ? `?${queryString}` : ''}`);

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }

  return response.json();
};

export async function getConfig(locale: Locale = 'en'): Promise<IConfig | null> {
  const config = await fetchConfig(locale);

  if (locale !== 'en' && !config) {
    return getConfig('en');
  }

  return config;
}

async function fetchConfig(locale: Locale = 'en'): Promise<IConfig | null> {
  try {
    const config = (await fetchAPI('/config', { locale: locale || 'en', populate: '*' })) as ConfigResponse;
    return config.data.attributes;
  } catch {
    return null;
  }
}