import { Locale } from 'next-intl';

import { IArrayResponse, IAttribute, Image, Meta } from '@/strapi';

export interface GetInsightsRequest {
  page?: string | number;
  pageSize?: string | number;
  locale?: Locale;
  notId?: string | number;
}

export interface GetInsightsResponse {
  meta: Meta;
  data: {
    id: number;
    title: string;
    description?: string;
    image: string;
    categories?: string[];
  }[];
}

export interface IInsight {
  title: string;
  description: string;
  slug: string;
  image?: Image;
  content: string;
  // ----
  createdAt: string;
  insight_categories: InsightCategoriesResponse;
  locale: Locale;
  localizations: IArrayResponse<IInsight>;
}

export interface IInsightCategory {
  name: string;
  slug: string;
  ordering: number;
}

export type InsightAttribute = IAttribute<IInsight>;
export type InsightsResponse = IArrayResponse<IInsight>;
export type InsightResponse = { data: InsightAttribute[]; meta: Meta };

export type InsightCategoryAttribute = IAttribute<IInsightCategory>;
export type InsightCategoriesResponse = IArrayResponse<IInsightCategory>;
export type InsightCategoryResponse = { data: InsightCategoryAttribute; meta: Meta };