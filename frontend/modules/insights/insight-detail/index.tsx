import { CalendarIcon } from 'lucide-react';

import { Image } from '@/components/atoms/image';
import { InsightViewCounter } from '@/modules/insights/hooks/use-insight-view-count';
import { getLongDateFormat } from '@/utils/date';

interface Props {
  title: string;
  image: string;
  content: string;
  createdAt: string;
  id: number;
}

export const InsightsDetail: React.FC<Props> = ({ title, image, content, createdAt, id }) => {
  const date = getLongDateFormat(createdAt);

  return (
    <div className="container max-w-4xl mx-auto py-16 space-y-6">
      <InsightViewCounter id={id} />
      <div className="space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        <div className="flex space-x-3 items-center text-foreground">
          <CalendarIcon className="size-4.5" />
          <span>{date}</span>
        </div>
      </div>
      <div className="aspect-video relative rounded-xl overflow-hidden">
        <Image src={image} alt={title} />
      </div>
      <article
        className="prose prose-base sm:prose-lg max-w-none dark:prose-invert prose-a:text-primary prose-a:font-semibold"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};