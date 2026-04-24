import { Locale } from 'next-intl';

import { fetchAPI } from '@/strapi';

import { PageResponse, PagesResponse } from './page.interface';

export async function getPage(slug: string, locale: Locale) {
  try {
    const fields = ['metaTitle', 'locale'];

    const rootPages = await fetchAPI<PagesResponse>('/pages', {
      locale: 'en',
      filters: { slug },
      fields,
      pagination: { limit: 1 },
      populate: { localizations: { fields } }
    });

    if (!rootPages?.data?.length) return null;

    const localizations = rootPages.data[0].attributes.localizations?.data || [];
    const p = localizations.find(x => x.attributes.locale === locale);
    const pageId = p ? p.id : rootPages.data[0].id;

    const page = await fetchAPI<PageResponse>(`/pages/${pageId}`, {
      locale: locale || 'en',
      populate: 'deep,9'
    });

    return page.data.attributes;
  } catch {
    return null;
  }
}
