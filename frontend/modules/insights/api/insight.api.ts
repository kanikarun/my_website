'use server';

import { Locale } from 'next-intl';

import { fetchAPI, getStrapiMedia, Pagination, STRAPI_IMAGE_FIELDS } from '@/strapi';
import { getAttributes } from '@/strapi/helper';

import * as I from './insight.interface';

export async function getInsights(opt: I.GetInsightsRequest): Promise<I.GetInsightsResponse> {
  const { locale = 'en', notId, page, pageSize } = opt;
  const filterByNotId = notId ? { id: { $not: notId } } : {};

  const fields = ['title', 'slug', 'createdAt', 'description', 'locale'];
  const { data, meta } = await fetchAPI<I.InsightResponse>('/insights', {
    filters: { ...filterByNotId },
    pagination: { page: +(page || 1), pageSize: +(pageSize || 12) },
    sort: ['id:desc'],
    fields,
    populate: {
      image: STRAPI_IMAGE_FIELDS,
      insight_categories: { fields: ['name', 'slug'] },
      localizations: { fields }
    }
  });

  const result = data.map(({ id, attributes }) => {
    const localize = getAttributes(attributes.localizations, locale);

    const attr = { ...attributes, ...localize?.attributes };
    return {
      id: id,
      title: attr.title,
      description: attr.description,
      slug: attr.slug,
      image: getStrapiMedia(attr.image),
      categories: attr.insight_categories.data.map(x => x.attributes.name)
    };
  });

  return { data: result, meta };
}

export async function getInsightDetail(slug: string, locale: Locale): Promise<I.IInsight | null> {
  const res = await fetchAPI<I.InsightResponse>('/insights', {
    locale,
    filters: { slug: { $eq: slug } },
    populate: '*',
    pagination: { page: 1, pageSize: 1 }
  });

  if (locale !== 'en' && !res.data.length) {
    return getInsightDetail(slug, 'en');
  }

  return res.data.length ? res.data[0].attributes : null;
}

export async function updateInsightViewCount(slug: string) {
  await fetchAPI(`/insights/${slug}/views-count`, {}, { method: 'POST' });
}

export async function getInsightCategories(pagination: Pagination): Promise<I.InsightCategoriesResponse> {
  return fetchAPI(`/insight-categories`, {
    sort: ['id:desc'],
    fields: ['name', 'slug'],
    pagination
    // Do not populate blogs, use getBlogs instead
  });
}