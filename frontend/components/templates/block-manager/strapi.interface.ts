import { Image, Images, Video } from "@/strapi";

type BlockComponent =
  | "blocks.carousel"
  | "blocks.clients"
  | "blocks.service"
  | "blocks.feature-card"
  | "blocks.feature-highlight";

type IStrapiBlock<Comp extends BlockComponent, Props> = Props & {
  __component: Comp;
};

export type IExtractStrapiBlock<T extends BlockComponent> = Extract<
  IStrapiBlocks,
  { __component: T }
>;

export type IStrapiBlocks =
  | IStrapiBlock<"blocks.carousel", IBlockCarousel>
  | IStrapiBlock<"blocks.clients", IBlockClient>
  | IStrapiBlock<"blocks.service", IBlockServices>
  | IStrapiBlock<"blocks.feature-card", IBlockFeatureCard>
  | IStrapiBlock<"blocks.feature-highlight", IBlockFeatureHighlight>;

// ------------------------------
// BLOCK
// ------------------------------

interface IBlockCarousel {
  sliders: Array<{
    tagline?: string;
    title?: string;
    subtitle?: string;
    image: Images;
    buttons?: Array<ISharedLinkButton>;
    metrics?: Array<{ label: string; value?: string; image?: Image }>;
  }>;
  theme?: "OneWorld" | "Odoo";
  isHide?: boolean;
}

export interface IBlockClient {
  client_label?: string;
  client_items?: IClientItem[];
}

interface IClientItem {
  name?: string;
  link?: string;
  image_light?: Image;
  image_dark?: Image;
}

interface IBlockFeatureCard {
  sectionTitle?: {
    tagline?: string;
    title?: string;
    description?: string;
    taglineColor?: "Primary" | "Purple" | "Teal";
  };
  items: Array<{
    title: string;
    description: string;
    image?: Image;
    tagline?: string;
  }>;
  variant?: "Two Columns" | "Three Columns";
  btnText?: string;
  btnLink?: string;
  isHide?: boolean;
}
interface IBlockFeatureHighlight {
  orientation: "Horizontal" | "Vertical";
  theme: "Default" | "OneWorld" | "Odoo";
  items: Array<{
    tagline?: string;
    title: string;
    description: string;
    hashtags?: { label: string; link?: string }[];
    btnText?: string;
    btnLink?: string;
    image?: Image;
    video?: Video;
  }>;
  isHide?: boolean;
}
interface IBlockServices {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{ icon: Image; title: string; subtitle: string }>;
  button?: { text: string; link?: string; target?: string };
  isHide: boolean;
}
// ------------------------------
// SHARED
// ------------------------------

interface ISharedLinkButton {
  text: string;
  link: string;
  target?: "_blank";
}
