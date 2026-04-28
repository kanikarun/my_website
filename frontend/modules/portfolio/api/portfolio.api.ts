"use server";

import { Locale } from "next-intl";

import { fetchAPI, getStrapiMedia, STRAPI_IMAGE_FIELDS } from "@/strapi";
import { getAttributes } from "@/strapi/helper";

import * as I from "./portfolio.interface";

export async function getPortfolios(
  opt: I.GetPortfoliosRequest,
): Promise<I.GetPortfoliosResponse> {
  const { locale = "en", type, notId, page, pageSize } = opt;

  const filterByNotId = notId ? { id: { $not: notId } } : {};
  const filterByType = type && type != "All" ? { type: { $eq: type } } : {};

  const fields = ["title", "description", "type", "locale"];
  const { data, meta } = await fetchAPI<I.PortfoliosResponse>("/portfolios", {
    filters: { ...filterByNotId, ...filterByType },
    pagination: { page: +(page || 1), pageSize: +(pageSize || 12) },
    sort: ["id:desc"],
    fields: ["title", "description", "type"],
    populate: {
      image: STRAPI_IMAGE_FIELDS,
      portfolio_categories: { fields: ["en", "km"] },
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
        attr.portfolio_categories?.data?.map(
          (x: any) => x.attributes[locale] || x.attributes.en,
        ) ?? [],
    };
  });

  return { data: result, meta };
}

export async function getPortfolioDetail(
  id: number,
  locale: Locale,
): Promise<I.GetPortfolioResponse | null> {
  const res = await fetchAPI<I.PortfolioResponse>(`/portfolios/${id}`, {
    locale: "en",
    populate: {
      image: STRAPI_IMAGE_FIELDS,
      portfolio_categories: { fields: ["en", "km"] },
      localizations: { fields: ["*"] },
    },
  });

  const localize = getAttributes(res.data.attributes.localizations, locale);
  const { attributes: attr } = res.data;

  return {
    data: {
      ...attr,
      ...localize?.attributes,
      id,
      image: getStrapiMedia(attr.image),
      categories: attr.portfolio_categories.data.map((x) => x.attributes.en),
    },
  };
}
