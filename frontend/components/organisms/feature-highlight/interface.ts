export interface FeatureHighlightProps {
  orientation?: 'Vertical' | 'Horizontal';
  theme?: 'Default' | 'OneWorld' | 'Odoo';
  align?: 'left' | 'right';
  tagline?: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  btnText?: string;
  btnLink?: string;
  hashtags: {
    label: string;
    link?: string;
  }[];
  classNames?: {
    tagline?: string;
    title?: string;
    description?: string;
    hashtag?: string;
    button?: string;
    wrapper?: string;
  };
}