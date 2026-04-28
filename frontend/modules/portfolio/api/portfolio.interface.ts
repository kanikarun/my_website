import { Locale } from 'next-intl';

import { IArrayResponse, IAttribute, Image, Meta } from '@/strapi';

export interface GetPortfoliosRequest {
  page?: string | number;
  type?: string;
  pageSize?: string | number;
  locale?: Locale;
  notId?: string | number;
}

export interface GetPortfoliosResponse {
  meta: Meta;
  data: {
    id: number;
    title: string;
    description?: string;
    image: string;
    categories?: string[];
  }[];
}

export interface GetPortfolioResponse {
  data: {
    id: number;
    title: string;
    description?: string;
    content: string;
    image: string;
    createdAt: string;
    categories?: string[];
  };
}

export interface IPortfolio {
  title: string;
  description: string;
  image?: Image;
  content: string;
  type: 'ERP' | 'Mobile' | 'Web';
  // ----
  createdAt: string;
  portfolio_categories: PortfolioCategoriesResponse;
  locale: string;
  localizations: IArrayResponse<IPortfolio>;
}

export interface IPortfolioCategory {
  en: string;
  km?: string;
}

export type PortfolioAttribute = IAttribute<IPortfolio>;
export type PortfoliosResponse = IArrayResponse<IPortfolio>;
export type PortfolioResponse = { data: PortfolioAttribute; meta: Meta };

export type PortfolioCategoryAttribute = IAttribute<IPortfolioCategory>;
export type PortfolioCategoriesResponse = IArrayResponse<IPortfolioCategory>;
export type PortfolioCategoryResponse = { data: PortfolioCategoryAttribute; meta: Meta };