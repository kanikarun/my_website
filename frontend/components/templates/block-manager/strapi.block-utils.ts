import { getStrapiMedia } from '@/strapi';

import { IExtractBlock } from './block-manager.interface';
import { IExtractStrapiBlock, IStrapiBlocks } from './strapi.interface';

export function getBlocks(blocks: IStrapiBlocks[]) {
  return blocks.map(b => getBlock(b));
}

function getBlock(block: IStrapiBlocks) {
  switch (block.__component) {
    case 'blocks.carousel':
      return blockCarousel(block);
    case 'blocks.client':
      return blockClient(block);
    default:
      return { __component: (block as any).__component, data: {} } as any;
  }
}

function blockCarousel(block: IExtractStrapiBlock<'blocks.carousel'>) {
  const { isHide, sliders, theme } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.carousel',
    data: {
      data: sliders?.map(x => ({
        theme,
        title: x.title,
        tagline: x.tagline,
        subtitle: x.subtitle,
        buttons: x.buttons,
        image: getStrapiMedia(x.image),
        metrics: x.metrics?.map(m => ({
          label: m.label,
          value: m.value ?? getStrapiMedia(m.image),
          type: m.value ? 'text' : 'image'
        }))
      }))
    }
  } as IExtractBlock<'blocks.carousel'>;
}

function blockClient(block: IExtractStrapiBlock<'blocks.client'>) {
  const { isHide, sectionTitle, type } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.client',
    data: { sectionTitle, type }
  } as IExtractBlock<'blocks.client'>;
}
