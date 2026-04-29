import { Locale } from "next-intl";

import { Carousel } from "@/components/organisms/carousel";
import { TemplateClient } from "@/components/templates/client";
import { TemplateFeatureCard } from "@/components/templates/feature-card";

import { BlockError, ErrorComponent } from "./block-error";
import { BlockComponentProps, BlockOption } from "./block-manager.interface";
import { TemplateServices } from "../services";
import { TemplateFeatureHighlight } from "../feature-highlight";
import { TemplatePortfolio } from "../portfolio";
import { TemplateTestimonial } from "../testimonial";
import { TemplateCTA } from "../cta";
import { TemplateHeaderSection } from "../header-section";
import { TemplateStepCard } from "../step-card";
import { TemplatePackage } from "../package";
import { TemplateFaq } from "../faq";
import { TemplateTeam } from '../team';
import { TemplateInsight } from "../insight";

interface Props {
  locale: Locale;
  blocks: (BlockComponentProps | null)[];
  searchParams: any;
  options?: BlockOption;
}

export const BlockManager: React.FC<Props> = ({
  blocks,
  locale,
  options,
  searchParams,
}) => (
  <>
    {blocks.map((x, i) => {
      if (!x) return null;
      return (
        <section key={i} data-name={x.__component}>
          <BlockError>
            <BlockComponent
              {...x}
              locale={locale}
              options={options}
              searchParams={searchParams}
            />
          </BlockError>
        </section>
      );
    })}
  </>
);

const BlockComponent: React.FC<BlockComponentProps> = ({
  __component,
  data,
  options,
  locale = "en",
  searchParams,
}) => {
  const {
    /* page, override */
  } = options || {};

  switch (__component) {
    case "blocks.carousel":
      return <Carousel {...data} />;

    case "blocks.template-feature-highlight":
      return <TemplateFeatureHighlight {...data} />;
    case "blocks.template-feature-card":
      return <TemplateFeatureCard {...data} />;
    case "blocks.template-clients":
      return <TemplateClient {...data} />;
    case "blocks.template-portfolio":
      return (
        <TemplatePortfolio
          {...data}
          searchParams={searchParams}
          locale={locale}
        />
      );
    case "blocks.template-service":
      return <TemplateServices {...data} />;
    case "blocks.template-testimonial":
      return <TemplateTestimonial {...data} />;
    case "blocks.template-call-to-action":
      return <TemplateCTA {...data} />;
    case "blocks.template-header-section":
      return <TemplateHeaderSection {...data} />;
    case "blocks.template-step-card":
      return <TemplateStepCard {...data} />;
    case "blocks.template-package":
      return <TemplatePackage {...data} />;
    case "blocks.template-faq":
      return <TemplateFaq {...data} />;
    case 'blocks.template-team':
      return <TemplateTeam {...data} locale={locale} />;
      case "blocks.template-insight":
        return <TemplateInsight {...data} />;

    default:
      return <ErrorComponent message={`Unknown component: ${__component}`} />;
  }
};
