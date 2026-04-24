export type IAttribute<T> = { id: number; attributes: T };
export type IArrayResponse<T> = { data: Array<IAttribute<T>>; meta: Meta };
export type IDataAttribute<T> = { data: IAttribute<T> };
type IResponse<T> = { data: T[]; meta: Meta };

export interface Image {
  name: string;
  url: string;
  formats?: {
    large?: Image;
    medium?: Image;
    small?: Image;
    thumbnail?: Image;
  };
}

interface IInsights {
  title: string;
  description: string;
  slug: string;
  image?: { data?: IAttribute<Image> };
  content: string;
  // ----
  createdAt: string;
  insight_categories: InsightCategoriesResponse;
}

interface IClient {
  name: string;
  link: string;
  moreWidth: boolean;
  moreHeight: boolean;
  ordering: number;
  image?: { data?: IAttribute<Image> };
  imageDark?: { data?: IAttribute<Image> };
  type: 'client' | 'partner';
}

export interface INavItem {
  id: number;
  name: string;
  url: string;
}

export interface INavigation {
  title: string;
  name: string;
  logo: IAttributeImageData;
  items: INavItem[];
  cta_text: string;
  cta_url: string;
}

export type NavigationResponse = { data: IAttribute<INavigation> };

export interface IConfig {
  image: IAttributeImageData;
  image_dark: IAttributeImageData;
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

export interface IPageBlock {
  id: number;
  __component:
    | 'blocks.about'
    | 'blocks.benefit'
    | 'blocks.blog'
    | 'blocks.call-to-action'
    | 'blocks.carousel'
    | 'blocks.client'
    | 'blocks.feature-work'
    | 'blocks.partnership'
    | 'blocks.service'
    | 'blocks.subscribe'
    | 'blocks.showcase'
    | 'blocks.technology'
    | 'blocks.testimonial';
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
  image: IAttributeImageData;
  buttons: IButton[];
  metrics: ISliderMetric[];
}

export interface ICarousel extends IPageBlock {
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
  metaImage?: IAttributeImageData;
  keywords?: string;
}


export type BannerResponse = { data: IAttribute<IBanner> };
export type ConfigResponse = { data: IAttribute<IConfig> };


export type IAttributeImageArrData = { data?: IAttribute<Image>[] };
export type IAttributeImageData = { data?: IAttribute<Image> };
export type IAttributeImage = IAttribute<Image>;

export type Video = { data?: IAttribute<{ url: string }> };

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
