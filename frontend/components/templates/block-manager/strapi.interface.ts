import { Image, Images, Video } from "@/strapi";

type BlockComponent =
  | "blocks.carousel"
  | "blocks.clients"
  | "blocks.service"
  | "blocks.feature-card"
  | "blocks.feature-highlight"
  | "blocks.portfolio"
  | "blocks.testimonial"
  | "blocks.call-to-action"
  | "blocks.header-section"
  | "blocks.step-card"
  | "blocks.package";

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
  | IStrapiBlock<"blocks.feature-highlight", IBlockFeatureHighlight>
  | IStrapiBlock<"blocks.portfolio", IBlockPortfolio>
  | IStrapiBlock<"blocks.testimonial", IBlockTestimonial>
  | IStrapiBlock<"blocks.call-to-action", IBlockCTA>
  | IStrapiBlock<"blocks.header-section", IBlockHeaderSection>
  | IStrapiBlock<"blocks.step-card", IBlockStepCard>
  | IStrapiBlock<"blocks.package", IBlockPackage>;

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

interface IBlockClient {
  sectionTitle?: ISharedSectionTitle;
  type?: "Company" | "Individual";
  isHide: boolean;
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
    btnLink: any;
    btnText: any;
    tagline?: string;
    title: string;
    description: string;
    hashtags?: { label: string; link?: string }[];
    button?: { text: string; link?: string; target?: string };
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

interface IBlockPortfolio {
  sectionTitle?: ISharedSectionTitle;
  variant: "All" | "Latest";
  isHide: boolean;
}

interface IBlockCTA {
  variant: "OneWorld" | "Odoo";
  title: string;
  subtitle?: string;
  image: Image;
  link?: string;
  buttons: Array<ISharedLinkButton>;
  isHide: boolean;
}
// ------------------------------
// SHARED
// ------------------------------
interface ISharedSectionTitle {
  tagline?: string;
  title?: string;
  description?: string;
}
interface ISharedLinkButton {
  text: string;
  link: string;
  target?: "_blank";
}

interface IBlockTestimonial {
  title: string;
  subtitle: string;
  people: {
    image: Image;
    name: string;
    position: string;
    content: string;
  }[];
  isHide: boolean;
}

interface IBlockHeaderSection {
  tagline?: string;
  title: string;
  description?: string;
  image: Image;
  isHide: boolean;
}

interface IBlockStepCard {
  sectionTitle: ISharedSectionTitle;
  bgColor: "Gray" | "White";
  variant: "Two Column" | "Three Column" | "Four Column" | "Five Column";
  items: Array<{ title: string; description: string }>;
  isHide?: boolean;
}

interface IBlockPackage {
  sectionTitle?: ISharedSectionTitle;
  packageItems: {
    tagline?: string;
    title: string;
    description: string;
    btnText?: string;
    btnLink?: string;
    isRecommend?: boolean;
  }[];
  isHide: boolean;
}
