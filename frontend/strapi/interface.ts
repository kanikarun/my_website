import { Locale } from 'next-intl';

export type IAttribute<T> = { id: number; attributes: T };
export type IDataAttribute<T> = { data: IAttribute<T> };
export type IArrayResponse<T> = { data: Array<IAttribute<T>>; meta: Meta };
type IResponse<T> = { data: T[]; meta: Meta };

interface ImageAttribute {
  name: string;
  url: string;
  formats?: {
    large?: ImageAttribute;
    medium?: ImageAttribute;
    small?: ImageAttribute;
    thumbnail?: ImageAttribute;
  };
}

export type Image = { data?: IAttribute<ImageAttribute> };
export type Images = { data?: IAttribute<ImageAttribute>[] };

// Aliases for backward compatibility
export type IAttributeImageData = Image;
export type IAttributeImageArrData = Images;
export type IAttributeImage = IAttribute<ImageAttribute>;

export interface INavItem {
  id: number;
  name: string;
  url: string;
}

export interface INavigation {
  title: string;
  name: string;
  logo: Image;
  items: INavItem[];
  cta_text: string;
  cta_url: string;
}

export type NavigationResponse = { data: IAttribute<INavigation> };

export interface IConfig {
  image: Image;
  image_dark: Image;
  slogan: string;
  linkedin_url: string;
  facebook_url: string;
  github_url: string;
  products: Array<{ name: string; url: string }>;
  company: Array<{ name: string; url: string }>;
}

export interface IInsightCategory {
  name: string;
  slug: string;
  ordering: number;
}

interface IBanner {
  title: string;
  link: string;
  show: boolean;
}

export interface IButton {
  text: string;
  link?: string;
  target?: '_self' | '_blank' | '_parent' | '__top';
}

export interface ISliderMetric {
  label: string;
  value?: string;
}

export interface ISlider {
  title: string;
  subtitle?: string;
  tagline?: string;
  image: Image;
  buttons: IButton[];
  metrics: ISliderMetric[];
}

export interface ICarousel {
  __component: 'blocks.carousel';
  sliders: ISlider[];
  theme: 'OneWorld' | 'Odoo';
  isHide: boolean;
}

export interface IPage {
  slug: string;
  block: Array<ICarousel>;
  metaTitle: string;
  metaDescription?: string;
  metaImage?: Image;
  keywords?: string;
}

export interface IInsights {
  title: string;
  description: string;
  slug: string;
  image?: Image;
  content: string;
  createdAt: string;
  insight_categories: InsightCategoriesResponse;
}

export interface IClient {
  name: string;
  link: string;
  moreWidth: boolean;
  moreHeight: boolean;
  ordering: number;
  image?: Image;
  imageDark?: Image;
  type: 'client' | 'partner';
}

export type BannerResponse = { data: IAttribute<IBanner> };
export type ConfigResponse = { data: IAttribute<IConfig> };

export type InsightAttribute = IAttribute<IInsights>;
export type InsightsResponse = IResponse<InsightAttribute>;
export type InsightResponse = { data: InsightAttribute[]; meta: Meta };

export type InsightCategoryAttribute = IAttribute<IInsightCategory>;
export type InsightCategoriesResponse = IResponse<InsightCategoryAttribute>;
export type InsightCategoryResponse = { data: InsightCategoryAttribute; meta: Meta };

export type ClientAttribute = IAttribute<IClient>;
export type ClientsResponse = IResponse<ClientAttribute>;
export type ClientResponse = { data: ClientAttribute; meta: Meta };

export type PageAttribute = IAttribute<IPage>;
export type PagesResponse = IResponse<PageAttribute>;
export type PageResponse = { data: PageAttribute; meta: Meta };

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export type Video = { data?: IAttribute<{ url: string }> };

export type { Locale };
