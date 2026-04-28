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
    case "blocks.portfolio":
      return blockPortfolio(block);
    case "blocks.testimonial":
      return blockTestimonial(block);
    case "blocks.call-to-action":
      return blockCTA(block);
    case "blocks.header-section":
      return blockHeaderSection(block);
    case "blocks.step-card":
      return blockStepCard(block);
    case "blocks.package":
      return blockPackage(block);
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
  const { isHide, sectionTitle, type } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-clients",
    data: {
      sectionTitle,
      type,
    },
  } as IExtractBlock<"blocks.template-clients">;
}

function blockFeatureCard(block: IExtractStrapiBlock<"blocks.feature-card">) {
  const { isHide, sectionTitle, items, variant, btnText, btnLink } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-feature-card",
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
  } as IExtractBlock<"blocks.template-feature-card">;
}

function blockService(block: IExtractStrapiBlock<"blocks.service">) {
  const { isHide, title, subtitle, description, features, button } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-service",
    data: {
      title,
      subtitle,
      description,
      features,
      button,
      isHide,
    },
  } as IExtractBlock<"blocks.template-service">;
}

function blockFeatureHighlight(
  block: IExtractStrapiBlock<"blocks.feature-highlight">,
) {
  const { isHide, orientation, theme, items } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-feature-highlight",
    data: {
      orientation,
      theme,
      items: items.map((x) => ({
        title: x.title,
        description: x.description,
        image: getStrapiMedia(x.image),
        video: getStrapiVideo(x.video),
        btnText: x.btnText,
        btnLink: x.btnLink,
        tagline: x.tagline,
        hashtags: x.hashtags,
      })),
    },
  } as IExtractBlock<"blocks.template-feature-highlight">;
}

function blockPortfolio(block: IExtractStrapiBlock<"blocks.portfolio">) {
  const { isHide, variant, sectionTitle } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-portfolio",
    data: {
      variant,
      sectionTitle,
    },
  } as IExtractBlock<"blocks.template-portfolio">;
}

function blockTestimonial(block: IExtractStrapiBlock<"blocks.testimonial">) {
  const { isHide, title, subtitle, people } = block;
  const sectionTitle =
    title && subtitle ? { tagline: title, title: subtitle } : undefined;

  if (isHide) return null;

  return {
    __component: "blocks.template-testimonial",
    data: {
      sectionTitle,
      items: people.map((x) => ({
        name: x.name,
        position: x.position,
        content: x.content,
        image: getStrapiMedia(x.image),
      })),
    },
  } as IExtractBlock<"blocks.template-testimonial">;
}

function blockHeaderSection(
  block: IExtractStrapiBlock<"blocks.header-section">,
) {
  const { isHide, tagline, title, description, image } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-header-section",
    data: {
      tagline,
      title,
      description,
      image: getStrapiMedia(image),
    },
  } as IExtractBlock<"blocks.template-header-section">;
}

function blockCTA(block: IExtractStrapiBlock<"blocks.call-to-action">) {
  const { isHide, variant, title, subtitle, buttons, image, link } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-call-to-action",
    data: {
      isHide,
      variant,
      title,
      subtitle,
      buttons,
      image: getStrapiMedia(image),
      link,
    },
  } as IExtractBlock<"blocks.template-call-to-action">;
}
function blockStepCard(block: IExtractStrapiBlock<"blocks.step-card">) {
  const { isHide, sectionTitle, bgColor, variant, items } = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-step-card",
    data: {
      bgColor,
      variant,
      sectionTitle,
      data: items.map((x) => ({ title: x.title, description: x.description })),
    },
  } as IExtractBlock<"blocks.template-step-card">;
}
function blockPackage(block: IExtractStrapiBlock<"blocks.package">) {
  const { isHide, sectionTitle, packageItems} = block;

  if (isHide) return null;

  return {
    __component: "blocks.template-package",
    data: {
      sectionTitle,
     packageItems,
    },
  } as IExtractBlock<"blocks.template-package">;
}
