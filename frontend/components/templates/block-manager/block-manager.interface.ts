import { Locale } from 'next-intl';

import { CarouselProps } from '@/components/organisms/carousel';
import { TemplateClientProps } from '@/components/templates/client';

export interface BlockOption {
  page?: string;
}

type Block<Comp extends BlockComponent, Props> = {
  __component: Comp;
  data: Props;
  locale?: Locale;
  options?: BlockOption;
};

export type IExtractBlock<T extends BlockComponent> = Extract<BlockComponentProps, { __component: T }>;

export type BlockComponent =
  | 'blocks.carousel'
  | 'blocks.client';

export type BlockComponentProps =
  | Block<'blocks.carousel', CarouselProps>
  | Block<'blocks.client', TemplateClientProps>;
