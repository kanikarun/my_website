import { Locale } from "next-intl";

import { Carousel } from "@/components/organisms/carousel";
import { TemplateClient } from "@/components/templates/client";
import { TemplateFeatureCard } from "@/components/templates/feature-card";

import { BlockError, ErrorComponent } from "./block-error";
import { BlockComponentProps } from "./block-manager.interface";
import { TemplateServices } from '../services';
import { TemplateFeatureHighlight } from "../feature-highlight";

interface Props {
  locale: Locale;
  blocks: (BlockComponentProps | null)[];
}

export const BlockManager: React.FC<Props> = ({ blocks, locale }) => (
  <>
    {blocks.map((x, i) => {
      if (!x) return null;
      return (
        <section key={i} data-name={x.__component}>
          <BlockError>
            <BlockComponent {...x} locale={locale} />
          </BlockError>
        </section>
      );
    })}
  </>
);

export const BlockComponent: React.FC<BlockComponentProps> = (block) => {
  switch (block.__component) {
    case "blocks.carousel":
      return <Carousel {...block.data} />;
    case "blocks.clients":
      return <TemplateClient {...block.data} />;
    case "blocks.template-service":
      return <TemplateServices {...block.data} />;
    case "blocks.template-feature-card":
      return <TemplateFeatureCard {...block.data} />;
      case "blocks.template-feature-highlight":
        return<TemplateFeatureHighlight{...block.data}/>
    default:
      return (
        <ErrorComponent
          message={`Unknown component: ${(block as BlockComponentProps).__component}`}
        />
      );
  }
};
