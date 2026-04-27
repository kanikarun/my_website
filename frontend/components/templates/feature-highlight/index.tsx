import { FeatureHighlight } from '@/components/organisms/feature-highlight';
import { FeatureHighlightProps } from '@/components/organisms/feature-highlight/interface';

export interface TemplateFeatureHighlightProps {
  orientation?: 'Vertical' | 'Horizontal';
  theme?: 'Default' | 'OneWorld' | 'Odoo';
  items: {
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
  }[];
}

export const TemplateFeatureHighlight = (props: TemplateFeatureHighlightProps) => {
  const { items, orientation = 'Horizontal', theme = 'Default' } = props;
  return items.map((x, i) => (
    <Component key={x.title} {...x} align={i % 2 ? 'left' : 'right'} orientation={orientation} theme={theme} />
  ));
};

const Component: React.FC<FeatureHighlightProps> = ({ theme, ...rest }) => {
  switch (theme) {
    case 'OneWorld':
      return (
        <FeatureHighlight
          {...rest}
          classNames={{
            hashtag: 'bg-white/10 text-gray-400',
            title: 'text-white',
            description: 'text-gray-400',
            tagline: 'text-primary',
            wrapper: 'not-dark:bg-navy-blue'
          }}
        />
      );
    case 'Odoo':
      return (
        <FeatureHighlight
          {...rest}
          classNames={{
            button: 'bg-teal',
            hashtag: 'text-teal! border-teal bg-teal/5 hover:bg-teal/10',
            title: 'text-foreground',
            tagline: 'text-teal',
            wrapper: 'not-dark:bg-gray-50'
          }}
        />
      );
    case 'Default':
    default:
      return (
        <FeatureHighlight
          {...rest}
          classNames={{
            hashtag: 'bg-gray-50',
            title: 'text-foreground',
            description: 'dark:text-muted-foreground dark:prose-strong:text-muted-foreground',
            tagline: 'text-white bg-primary w-fit px-3 rounded-sm',
            wrapper: 'bg-white dark:bg-black'
          }}
        />
      );
  }
};