"use server";

import { Locale } from "next-intl";

import {
  fetchAPI,
  getStrapiMedia,
  Pagination,
  STRAPI_IMAGE_FIELDS,
} from "@/strapi";
import { getAttributes } from "@/strapi/helper";

import * as I from "./insight.interface";

export async function getInsights(
  opt: I.GetInsightsRequest,
): Promise<I.GetInsightsResponse> {
  const { locale = "en", notId, page, pageSize } = opt;
  const filterByNotId = notId ? { id: { $not: notId } } : {};

  const fields = ["title", "createdAt", "description", "locale"];
  const { data, meta } = await fetchAPI<I.InsightResponse>("/insights", {
    filters: { ...filterByNotId },
    pagination: { page: +(page || 1), pageSize: +(pageSize || 12) },
    sort: ["id:desc"],
    fields: ["title", "description"],
    populate: {
      image: STRAPI_IMAGE_FIELDS,
      insight_categories: { fields: ["name", "slug"] },
      localizations: { fields },
    },
  });

  const result = data.map(({ id, attributes }) => {
    const localize = getAttributes(attributes.localizations, locale);

    const attr = { ...attributes, ...localize?.attributes };
    return {
      id: id,
      title: attr.title,
      description: attr.description,
      image: getStrapiMedia(attr.image),
      categories:
        attr.insight_categories?.data?.map((x: any) => x.attributes.name) ??
        [],
    };
  });

  return { data: result, meta };
}

export async function getInsightDetailById(
  id: number,
  locale: Locale,
): Promise<I.IInsight | null> {
  const res = await fetchAPI<I.InsightResponse>("/insights", {
    locale: "en",
    filters: { id: { $eq: id } },
    populate: {
      image: "*",
      insight_categories: { fields: ["name", "slug"] },
      localizations: { fields: ["*"] },
    },
    pagination: { page: 1, pageSize: 1 },
  });

  if (!res.data.length) return null;

  const { attributes: attr } = res.data[0];
  const localize = attr.localizations?.data
    ? getAttributes(attr.localizations, locale)
    : undefined;

  return { ...attr, ...localize?.attributes };
}

export async function updateInsightViewCount(id: number) {
  await fetchAPI(`/insights/${id}/views-count`, {}, { method: "POST" });
}

export async function getInsightCategories(
  pagination: Pagination,
): Promise<I.InsightCategoriesResponse> {
  return fetchAPI(`/insight-categories`, {
    sort: ["id:desc"],
    fields: ["name", "slug"],
    pagination,
  });
}
