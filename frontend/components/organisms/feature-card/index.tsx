import { Image } from '@/components/atoms/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { FeatureCardItemProps, FeatureCardProps } from './interface';

export const FeatureCard: React.FC<FeatureCardProps> = ({ data, variant = 'Two Columns' }) => {
  const isTwoColumn = variant === 'Two Columns';

  return (
    <div
      className={cn('grid grid-cols-1 gap-6', {
        'md:grid-cols-2': isTwoColumn,
        'md:grid-cols-2 lg:grid-cols-3': !isTwoColumn
      })}
    >
      {data.map(x => (
        <FeatureCardItem key={x.title} {...x} />
      ))}
    </div>
  );
};

const FeatureCardItem: React.FC<FeatureCardItemProps> = props => {
  const { image, tagline, title, description } = props;
  const enabledImgAndBadge = Boolean(image) || Boolean(tagline);
  return (
    <Card className="dark:bg-navy-blue/50">
      <CardHeader className="gap-2">
        <div className="flex justify-between flex-wrap gap-4" hidden={!enabledImgAndBadge}>
          {image && <Image src={image} alt={title} width={64} height={64} />}
          {tagline && (
            <Badge
              className="rounded-sm border-border text-secondary-foreground py-1 dark:bg-navy-blue"
              variant="secondary"
            >
              {tagline}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg lg:text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm lg:text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};