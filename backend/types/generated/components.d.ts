import type { Attribute, Schema } from '@strapi/strapi';

export interface BaseButton extends Schema.Component {
  collectionName: 'components_base_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    link: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_parent', '__top']>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface BaseFaqItem extends Schema.Component {
  collectionName: 'components_base_faq_items';
  info: {
    description: '';
    displayName: 'Faq Item';
  };
  attributes: {
    answer: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    question: Attribute.String & Attribute.Required;
  };
}

export interface BaseFeature extends Schema.Component {
  collectionName: 'components_blocks_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BaseFeatureCardItem extends Schema.Component {
  collectionName: 'components_base_feature_card_items';
  info: {
    displayName: 'Feature Card Item';
    icon: 'cube';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'>;
    tagline: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BaseFeatureHighlightItem extends Schema.Component {
  collectionName: 'components_base_feature_highlight_items';
  info: {
    description: '';
    displayName: 'Feature Highlight Item';
    icon: 'cube';
  };
  attributes: {
    btnLink: Attribute.String;
    btnText: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    hashtags: Attribute.Component<'base.hashtag', true>;
    image: Attribute.Media<'images'>;
    tagline: Attribute.String;
    title: Attribute.String & Attribute.Required;
    video: Attribute.Media<'videos'>;
  };
}

export interface BaseFeatureSlide extends Schema.Component {
  collectionName: 'components_base_feature_slides';
  info: {
    displayName: 'Feature Slide';
  };
  attributes: {
    buttons: Attribute.Component<'base.button', true>;
    description: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BaseHashtag extends Schema.Component {
  collectionName: 'components_base_hashtags';
  info: {
    displayName: 'Hashtag';
    icon: 'hashtag';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface BaseLink extends Schema.Component {
  collectionName: 'components_base_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface BaseLinkDownload extends Schema.Component {
  collectionName: 'components_base_link_downloads';
  info: {
    description: '';
    displayName: 'Link Download';
  };
  attributes: {
    link: Attribute.String;
    type: Attribute.Enumeration<['android', 'ios', 'huawei']> &
      Attribute.Required;
  };
}

export interface BasePackageItem extends Schema.Component {
  collectionName: 'components_base_package_items';
  info: {
    description: '';
    displayName: 'Package Item';
    icon: 'cube';
  };
  attributes: {
    btnLink: Attribute.String;
    btnText: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    isRecommend: Attribute.Boolean & Attribute.DefaultTo<false>;
    tagline: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BasePerson extends Schema.Component {
  collectionName: 'components_base_people';
  info: {
    description: '';
    displayName: 'Person';
  };
  attributes: {
    content: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
  };
}

export interface BaseSlider extends Schema.Component {
  collectionName: 'components_base_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    buttons: Attribute.Component<'base.button', true>;
    image: Attribute.Media<'images'> & Attribute.Required;
    metrics: Attribute.Component<'base.slider-metric', true>;
    subtitle: Attribute.String;
    tagline: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BaseSliderMetric extends Schema.Component {
  collectionName: 'components_base_slider_metrics';
  info: {
    displayName: 'Slider Metric';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    label: Attribute.String & Attribute.Required;
    value: Attribute.String;
  };
}

export interface BaseStepCardItem extends Schema.Component {
  collectionName: 'components_base_step_card_items';
  info: {
    displayName: 'Step Card Item';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BaseTechnologyIcon extends Schema.Component {
  collectionName: 'components_base_technology_icons';
  info: {
    description: '';
    displayName: 'Technology Icon';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    iconLink: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    imageDark: Attribute.Media<'images'> & Attribute.Required;
    imageLight: Attribute.Media<'images'> & Attribute.Required;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksBenefit extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    description: '';
    displayName: 'Benefit';
  };
  attributes: {
    description: Attribute.Text;
    features: Attribute.Component<'base.feature', true>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_blocks_call_to_actions';
  info: {
    description: '';
    displayName: 'Call to Action';
  };
  attributes: {
    buttons: Attribute.Component<'base.button', true>;
    image: Attribute.Media<'images'>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['OneWorld', 'Odoo']> & Attribute.Required;
  };
}

export interface BlocksCarousel extends Schema.Component {
  collectionName: 'components_blocks_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    sliders: Attribute.Component<'base.slider', true>;
    theme: Attribute.Enumeration<['OneWorld', 'Odoo']> &
      Attribute.Required &
      Attribute.DefaultTo<'OneWorld'>;
  };
}

export interface BlocksClient extends Schema.Component {
  collectionName: 'components_blocks_clients';
  info: {
    description: '';
    displayName: 'Client';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionTitle: Attribute.Component<'shared.section-title'>;
    type: Attribute.Enumeration<['Company', 'Individual']>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Component<'base.faq-item', true> & Attribute.Required;
    sectionTitle: Attribute.Component<'shared.section-title'>;
  };
}

export interface BlocksFeatureCard extends Schema.Component {
  collectionName: 'components_blocks_feature_cards';
  info: {
    description: '';
    displayName: 'Feature Card';
    icon: 'grid';
  };
  attributes: {
    btnLink: Attribute.String;
    btnText: Attribute.String;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Component<'base.feature-card-item', true> &
      Attribute.Required;
    sectionTitle: Attribute.Component<'shared.section-title'>;
    variant: Attribute.Enumeration<['Two Columns', 'Three Columns']> &
      Attribute.Required &
      Attribute.DefaultTo<'Two Columns'>;
  };
}

export interface BlocksFeatureHighlight extends Schema.Component {
  collectionName: 'components_blocks_feature_highlights';
  info: {
    description: '';
    displayName: 'Feature Highlight';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'base.feature-highlight-item', true>;
    orientation: Attribute.Enumeration<['Horizontal', 'Vertical']> &
      Attribute.DefaultTo<'Horizontal'>;
    theme: Attribute.Enumeration<['Default', 'OneWorld', 'Odoo']> &
      Attribute.DefaultTo<'Default'>;
  };
}

export interface BlocksFeatureWork extends Schema.Component {
  collectionName: 'components_blocks_feature_works';
  info: {
    description: '';
    displayName: 'Feature Work';
  };
  attributes: {
    featureSlides: Attribute.Component<'base.feature-slide', true>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksHeaderSection extends Schema.Component {
  collectionName: 'components_blocks_header_sections';
  info: {
    displayName: 'Header Section';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    tagline: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksInsight extends Schema.Component {
  collectionName: 'components_blocks_insights';
  info: {
    displayName: 'Insight';
    icon: 'book';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksPackage extends Schema.Component {
  collectionName: 'components_blocks_packages';
  info: {
    description: '';
    displayName: 'Package';
    icon: 'cube';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Component<'base.package-item', true>;
    sectionTitle: Attribute.Component<'shared.section-title'>;
  };
}

export interface BlocksPartnership extends Schema.Component {
  collectionName: 'components_blocks_partnerships';
  info: {
    description: '';
    displayName: 'Partnership';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksPortfolio extends Schema.Component {
  collectionName: 'components_blocks_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionTitle: Attribute.Component<'shared.section-title'>;
    variant: Attribute.Enumeration<['All', 'Latest']> & Attribute.Required;
  };
}

export interface BlocksService extends Schema.Component {
  collectionName: 'components_blocks_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    description: Attribute.Text;
    features: Attribute.Component<'base.feature', true>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksShowcase extends Schema.Component {
  collectionName: 'components_blocks_showcases';
  info: {
    description: '';
    displayName: 'Showcase';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    linkDownloads: Attribute.Component<'base.link-download', true>;
    logoDark: Attribute.Media<'images'> & Attribute.Required;
    logoLight: Attribute.Media<'images'> & Attribute.Required;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksStepCard extends Schema.Component {
  collectionName: 'components_blocks_step_cards';
  info: {
    description: '';
    displayName: 'Step Card';
  };
  attributes: {
    bgColor: Attribute.Enumeration<['Gray', 'White']> &
      Attribute.Required &
      Attribute.DefaultTo<'Gray'>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Component<'base.step-card-item', true> &
      Attribute.Required;
    sectionTitle: Attribute.Component<'shared.section-title'>;
    variant: Attribute.Enumeration<
      ['Two Column', 'Three Column', 'Four Column', 'Five Column']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Two Column'>;
  };
}

export interface BlocksSubscribe extends Schema.Component {
  collectionName: 'components_blocks_subscribes';
  info: {
    description: '';
    displayName: 'Subscribe';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_blocks_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionTitle: Attribute.Component<'shared.section-title'>;
  };
}

export interface BlocksTechnology extends Schema.Component {
  collectionName: 'components_blocks_technologies';
  info: {
    description: '';
    displayName: 'Technology';
  };
  attributes: {
    buttons: Attribute.Component<'base.button', true>;
    description: Attribute.String;
    icons: Attribute.Component<'base.technology-icon', true>;
    image: Attribute.Media<'images'>;
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    isHide: Attribute.Boolean & Attribute.DefaultTo<false>;
    people: Attribute.Component<'base.person', true>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MenuItems extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    description: '';
    displayName: 'items';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedMenuItem extends Schema.Component {
  collectionName: 'components_shared_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
    icon: 'paperPlane';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedProducts extends Schema.Component {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
    icon: 'link';
  };
  attributes: {};
}

export interface SharedSectionTitle extends Schema.Component {
  collectionName: 'components_shared_section_titles';
  info: {
    description: '';
    displayName: 'Section Title';
  };
  attributes: {
    description: Attribute.Text;
    tagline: Attribute.String;
    taglineColor: Attribute.Enumeration<['Primary', 'Purple', 'Teal']> &
      Attribute.Required &
      Attribute.DefaultTo<'Primary'>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.button': BaseButton;
      'base.faq-item': BaseFaqItem;
      'base.feature': BaseFeature;
      'base.feature-card-item': BaseFeatureCardItem;
      'base.feature-highlight-item': BaseFeatureHighlightItem;
      'base.feature-slide': BaseFeatureSlide;
      'base.hashtag': BaseHashtag;
      'base.link': BaseLink;
      'base.link-download': BaseLinkDownload;
      'base.package-item': BasePackageItem;
      'base.person': BasePerson;
      'base.slider': BaseSlider;
      'base.slider-metric': BaseSliderMetric;
      'base.step-card-item': BaseStepCardItem;
      'base.technology-icon': BaseTechnologyIcon;
      'blocks.about': BlocksAbout;
      'blocks.benefit': BlocksBenefit;
      'blocks.call-to-action': BlocksCallToAction;
      'blocks.carousel': BlocksCarousel;
      'blocks.client': BlocksClient;
      'blocks.faq': BlocksFaq;
      'blocks.feature-card': BlocksFeatureCard;
      'blocks.feature-highlight': BlocksFeatureHighlight;
      'blocks.feature-work': BlocksFeatureWork;
      'blocks.header-section': BlocksHeaderSection;
      'blocks.insight': BlocksInsight;
      'blocks.package': BlocksPackage;
      'blocks.partnership': BlocksPartnership;
      'blocks.portfolio': BlocksPortfolio;
      'blocks.service': BlocksService;
      'blocks.showcase': BlocksShowcase;
      'blocks.step-card': BlocksStepCard;
      'blocks.subscribe': BlocksSubscribe;
      'blocks.team': BlocksTeam;
      'blocks.technology': BlocksTechnology;
      'blocks.testimonial': BlocksTestimonial;
      'menu.items': MenuItems;
      'shared.menu-item': SharedMenuItem;
      'shared.products': SharedProducts;
      'shared.section-title': SharedSectionTitle;
    }
  }
}
