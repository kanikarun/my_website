import { Locale } from 'next-intl';

import { Carousel } from '@/components/organisms/carousel';
import { TemplateClient } from '@/components/templates/client';

import { BlockError, ErrorComponent } from './block-error';
import { BlockComponentProps } from './block-manager.interface';

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

const BlockComponent: React.FC<BlockComponentProps> = block => {
  switch (block.__component) {
    case 'blocks.carousel':
      return <Carousel {...block.data} />;
    case 'blocks.client':
      return <TemplateClient {...block.data} />;
    default:
      return <ErrorComponent message={`Unknown component: ${(block as BlockComponentProps).__component}`} />;
  }
};
