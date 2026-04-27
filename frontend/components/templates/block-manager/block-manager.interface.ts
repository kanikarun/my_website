import { Locale } from 'next-intl';

import { CarouselProps } from '@/components/organisms/carousel';
import { TemplateClientProps } from '@/components/templates/client';
import { TemplateFeatureCardProps } from '../feature-card';
import { TemplateFeatureHighlightProps } from '../feature-highlight';
import { TemplateServicesProps } from '../services';

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
  | 'blocks.clients'
  | 'blocks.template-service'
  | 'blocks.template-feature-card'
  | 'blocks.template-feature-highlight';

export type BlockComponentProps =
  | Block<'blocks.carousel', CarouselProps>
  | Block<'blocks.clients', TemplateClientProps>
  | Block<'blocks.template-service', TemplateServicesProps>
  | Block<'blocks.template-feature-card', TemplateFeatureCardProps>
  | Block<'blocks.template-feature-highlight', TemplateFeatureHighlightProps>;

