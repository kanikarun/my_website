import { Image } from '@/components/atoms/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';

interface Props {
  title: string;
  description?: string;
  image: string;
  categories?: string[];
  btnText: string;
  btnLink: string;
}

export const ArticleCard = ({ title, description, image, categories, btnText, btnLink }: Props) => {
  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden pt-0! dark:bg-navy-blue/50">
      <div className="relative aspect-video border-b">
        <Image src={image} alt={title} className="object-cover dark:brightness-75" />
      </div>
      <CardHeader className="gap-2">
        <div className="flex flex-wrap gap-2" hidden={!categories?.length}>
          {categories?.map(x => (
            <Badge
              className="rounded-sm border-border text-secondary-foreground py-1 dark:bg-navy-blue"
              variant="secondary"
              key={x}
              hidden={!x}
            >
              {x}
            </Badge>
          ))}
        </div>
        <CardTitle className="font-semibold text-lg! line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-base line-clamp-2">{description}</CardDescription>
        <br />
        <Link className="text-sm font-semibold text-primary" href={btnLink}>
          {btnText}
        </Link>
      </CardHeader>
    </Card>
  );
};