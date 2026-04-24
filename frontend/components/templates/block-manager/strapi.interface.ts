import { IAttributeImageData } from '@/strapi';

type BlockComponent =
  | 'blocks.carousel'
  | 'blocks.client';

type IStrapiBlock<Comp extends BlockComponent, Props> = Props & { __component: Comp };

export type IExtractStrapiBlock<T extends BlockComponent> = Extract<IStrapiBlocks, { __component: T }>;

export type IStrapiBlocks =
  | IStrapiBlock<'blocks.carousel', IBlockCarousel>
  | IStrapiBlock<'blocks.client', IBlockClient>;

export interface IBlockClient {
  isHide?: boolean;
  sectionTitle?: {
    tagline?: string;
    title?: string;
    description?: string;
    taglineColor?: 'Primary' | 'Purple' | 'Teal';
  };
  type?: 'Company' | 'Individual';
}

export interface IBlockCarousel {
  sliders: Array<{
    tagline?: string;
    title?: string;
    subtitle?: string;
    image: IAttributeImageData;
    buttons?: Array<{ text: string; link: string; target?: '_blank' }>;
    metrics?: Array<{ label: string; value?: string; image?: IAttributeImageData }>;
  }>;
  theme?: 'OneWorld' | 'Odoo';
  isHide?: boolean;
}
