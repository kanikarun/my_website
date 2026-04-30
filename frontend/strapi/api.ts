import { Locale } from 'next-intl';
import { stringify } from 'qs';

import { env } from '@/env.mjs';

import type { ConfigResponse, IConfig } from './interface';

export const getStaticURL = (path = '') => {
  return `${env.NEXT_STRAPI_URL || 'https://strapi.oneworldsoftware.com'}${path}`;
};

interface Params {
  fields?: string[];
  filters?: Record<string, unknown>;
  publicationState?: 'live' | 'preview';
  locale?: Locale | 'all';
  nested?: true; // For query menus
  populate?: '*' | 'deep' | `deep,${number}` | Record<string, unknown>;
  sort?: string[];
  /**
   * @link https://docs.strapi.io/dev-docs/api/rest/sort-pagination#pagination
   */
  pagination?: {
    start?: number;
    limit?: number;
    // ---
    page?: number;
    pageSize?: number;
    withCount?: boolean;
  };
}

export async function fetchAPI<T>(path: string, urlParamsObject: Params = {}, options = {}) {
  // Build request URL
  const queryString = stringify(urlParamsObject, { addQueryPrefix: true });
  const requestUrl = getStaticURL(`/api${path}${queryString}`);

  // Trigger API call
  const response = await fetch(requestUrl, {
    next: { revalidate: 300, tags: ['api'] },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.NEXT_STRAPI_TOKEN}`
    },
    signal: AbortSignal.timeout(10000),
    ...options
  });

  // Handle response
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }

  return response.json() as T;
}


/**
 * !Noted : Nextjs 15 or higher no longer supports revalidation during rendering process
 *  @link : https://nextjs.org/docs/app/api-reference/functions/unstable_after
 */
export async function revalidateCache(searchParams: any) {
  const { after } = await import('next/server');
  const { revalidateTag } = await import('next/cache');
  after(async () => {
    if (+searchParams?.revalidate) revalidateTag('api', 'max');
  });
}

export async function getConfig(locale: Locale = 'en'): Promise<IConfig | null> {
  const config = await fetchConfig(locale);

  if (locale !== 'en' && !config) {
    return getConfig('en');
  }

  return config;
}

async function fetchConfig(locale: Locale = 'en'): Promise<IConfig | null> {
  try {
    const config = await fetchAPI<ConfigResponse>('/footer', {
      locale: locale || 'en',
      populate: '*'
    });
    return config.data.attributes;
  } catch {
    return null;
  }
}