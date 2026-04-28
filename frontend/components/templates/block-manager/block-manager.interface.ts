import { Locale } from "next-intl";

import { CarouselProps } from "@/components/organisms/carousel";
import { TemplateClientProps } from "@/components/templates/client";
import { TemplateFeatureCardProps } from "../feature-card";
import { TemplateFeatureHighlightProps } from "../feature-highlight";
import { TemplateServicesProps } from "../services";
import { TemplatePortfolioProps } from "../portfolio";
import { TemplateTestimonialProps } from "../testimonial";
import { TemplateCTAProps } from "../cta";
import { TemplateHeaderSectionProps } from "../header-section";

export interface BlockOption {
  page?: string;
}

type Block<Comp extends BlockComponent, Props> = {
  __component: Comp;
  data: Props;
  locale?: Locale;
  searchParams?: any;
  options?: BlockOption;
};
export type IExtractBlock<T extends BlockComponent> = Extract<
  BlockComponentProps,
  { __component: T }
>;

export type BlockComponent =
  | "blocks.carousel"
  | "blocks.template-clients"
  | "blocks.template-service"
  | "blocks.template-feature-card"
  | "blocks.template-feature-highlight"
  | "blocks.template-portfolio"
  | "blocks.template-testimonial"
  | "blocks.template-call-to-action"
  | "blocks.template-header-section";

export type BlockComponentProps =
  | Block<"blocks.carousel", CarouselProps>
  | Block<"blocks.template-clients", TemplateClientProps>
  | Block<"blocks.template-service", TemplateServicesProps>
  | Block<"blocks.template-feature-card", TemplateFeatureCardProps>
  | Block<"blocks.template-feature-highlight", TemplateFeatureHighlightProps>
  | Block<"blocks.template-portfolio", TemplatePortfolioProps>
  | Block<"blocks.template-testimonial", TemplateTestimonialProps>
  | Block<"blocks.template-call-to-action", TemplateCTAProps>
  | Block<"blocks.template-header-section", TemplateHeaderSectionProps>;
