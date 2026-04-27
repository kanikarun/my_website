import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { Image } from '@/components/atoms/image';
import { cn } from '@/lib/utils';

export interface TemplateHeaderSectionProps {
  tagline?: string;
  title: string;
  description?: string;
  image?: string | StaticImport;
}

export const TemplateHeaderSection: React.FC<TemplateHeaderSectionProps> = props => {
  const { tagline, title, description, image } = props;

  return (
    <div className="relative aspect-5/1 flex items-end">
      <Image fill src={image || ''} alt="Page Header Background" loading="eager" />
      <div className={cn('absolute bg-navy-blue size-full', { 'mix-blend-multiply': Boolean(image) })} />
      <div className="container relative pt-32 pb-16 text-white">
        <div className="w-full grid grid-cols-7 gap-6 lg:divide-x">
          <div className="lg:col-span-4 col-span-full space-y-2">
            {Boolean(tagline) && <p className="text-white text-lg">{tagline}</p>}
            <h1 className="text-3xl sm:text-4xl font-bold dark:text-white max-w-lg">{title}</h1>
          </div>

          {Boolean(description) && <p className="text-lg lg:col-span-3 col-span-full self-center">{description}</p>}
        </div>
      </div>
    </div>
  );
};