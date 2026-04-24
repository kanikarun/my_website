import { IStrapiBlocks } from '@/components/templates/block-manager';
import { IArrayResponse, IDataAttribute } from '@/strapi';

interface IPage {
  metaTitle: string;
  metaDescription?: string;
  keywords?: string;
  slug: string;
  block: IStrapiBlocks[];
  locale: string;
  localizations: IArrayResponse<IPage>;
}

export type PagesResponse = IArrayResponse<IPage>;
export type PageResponse = IDataAttribute<IPage>;
