import { getStrapiMedia, getStrapiVideo } from "@/strapi";
import { IExtractBlock } from "./block-manager.interface";
import { IExtractStrapiBlock, IStrapiBlocks } from "./strapi.interface";

export function getBlocks(blocks: IStrapiBlocks[]) {
  return blocks.map((b) => getBlock(b));
}

function getBlock(block: IStrapiBlocks) {
  switch (block.__component) {
    case "blocks.carousel":
      return blockCarousel(block);
    case "blocks.clients":
      return blockClient(block);
    case "blocks.service":
      return blockService(block);
    case "blocks.feature-card":
      return blockFeatureCard(block);
      case "blocks.feature-highlight":
        return blockFeatureHighlight(block);
    default:
      return null;
  }
}

function blockCarousel(block: IExtractStrapiBlock<"blocks.carousel">) {
  const { isHide, sliders, theme } = block;

  if (isHide) return null;

  return {
    __component: "blocks.carousel",
    data: {
      data: sliders?.flatMap((x) =>
        (x.image?.data || []).map((img) => ({
          theme,
          title: x.title,
          tagline: x.tagline,
          subtitle: x.subtitle,
          buttons: x.buttons,
          image: getStrapiMedia({ data: img }),
          metrics: x.metrics?.map((m) => ({
            label: m.label,
            value: m.value ?? getStrapiMedia(m.image),
            type: m.value ? "text" : "image",
          })),
        })),
      ),
    },
  } as IExtractBlock<"blocks.carousel">;
}

function blockClient(block: IExtractStrapiBlock<"blocks.clients">) {
  const { client_label, client_items } = block;

  return {
    __component: "blocks.clients",
    data: {
      client_label,
      logo: client_items?.map((item) => ({
        name: item.name ?? "",
        link: item.link,
        image: {
          light: getStrapiMedia(item.image_light),
          dark: getStrapiMedia(item.image_dark),
        },
      })),
    },
  } as IExtractBlock<"blocks.clients">;
}

function blockFeatureCard(block: IExtractStrapiBlock<'blocks.feature-card'>) {
  const { isHide, sectionTitle, items, variant, btnText, btnLink } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-feature-card',
    data: {
      sectionTitle,
      data: items?.map((item) => ({
        title: item.title,
        description: item.description,
        tagline: item.tagline,
        image: getStrapiMedia(item.image),
      })),
      variant,
      btnText,
      btnLink,
    },
  } as IExtractBlock<'blocks.template-feature-card'>;
}

function blockService(block: IExtractStrapiBlock<'blocks.service'>) {
  const { isHide, title, subtitle, description, features, button } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-service',
    data: {
      title,
      subtitle,
      description,
      features,
      button,
      isHide
    }
  } as IExtractBlock<'blocks.template-service'>;
}


function blockFeatureHighlight(block: IExtractStrapiBlock<'blocks.feature-highlight'>) {
  const { isHide, orientation, theme, items } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-feature-highlight',
    data: {
      orientation,
      theme,
      items: items.map(x => ({
        title: x.title,
        description: x.description,
        image: getStrapiMedia(x.image),
        video: getStrapiVideo(x.video),
        btnText: x.btnText,
        btnLink: x.btnLink,
        tagline: x.tagline,
        hashtags: x.hashtags
      }))
    }
  } as IExtractBlock<'blocks.template-feature-highlight'>;
}