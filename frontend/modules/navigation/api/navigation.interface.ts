import { IAttributeImageData } from '@/strapi';

export interface INavItem {
  id: number;
  name: string;
  url: string;
}

export interface INavigation {
  title: string;
  name: string;
  logo: IAttributeImageData;
  logo_dark: IAttributeImageData;
  items: INavItem[];
  cta_text: string;
  cta_url: string;
}

export type NavigationResponse = {
  data: {
    id: number;
    attributes: INavigation;
  };
};

interface IBanner {
  title: string;
  link: string;
  show: boolean;
}

export type BannerResponse = {
  data: {
    id: number;
    attributes: IBanner;
  };
};