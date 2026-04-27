import { Image } from '@/components/atoms/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

import { FeatureHighlightProps } from './interface';

export const FeatureHighlight: React.FC<FeatureHighlightProps> = props => {
  const { title, description, hashtags, btnText, btnLink, orientation, align, tagline, classNames } = props;
  const isHorizontal = orientation === 'Horizontal';
  const isLeftAlign = align === 'left';

  return (
    <div className={cn('py-8 lg:py-16 border-b', classNames?.wrapper)}>
      <div className="container">
        <div className={cn('grid grid-cols-1 gap-10', { 'lg:grid-cols-2': isHorizontal })}>
          <div
            className={cn('flex flex-col self-center space-y-4 items-center text-center', {
              'items-start text-left': isHorizontal,
              'order-last': isLeftAlign
            })}
          >
            <div className="space-y-2">
              <p
                className={cn(
                  'text-primary md:text-lg font-semibold',
                  { 'mx-auto': !isHorizontal },
                  classNames?.tagline
                )}
              >
                {tagline}
              </p>
              <h2 className={cn('text-2xl sm:text-3xl font-bold max-w-lg text-white', classNames?.title)}>{title}</h2>
            </div>
            <div
              className={cn('prose prose-lg', classNames?.description)}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className={cn('flex flex-wrap space-y-2 justify-center', {
                'justify-start': isHorizontal
              })}
            >
              {hashtags.map(h => (
                <Button key={h.label} variant="ghost" className={cn('mr-2 font-medium!', classNames?.hashtag)}>
                  {h.label}
                </Button>
              ))}
            </div>
            <Button asChild size="2xl" className={classNames?.button} hidden={!btnText}>
              <Link href={btnLink || '#'}>{btnText}</Link>
            </Button>
          </div>
          <MediaComponent
            className={cn({ 'max-w-5xl mx-auto': !isHorizontal, 'order-first': isLeftAlign })}
            image={props.image}
            video={props.video}
          />
        </div>
      </div>
    </div>
  );
};

const MediaComponent: React.FC<{ image?: string; video?: string; className?: string }> = props => {
  const { image, video, className } = props;

  if (video) {
    return (
      <video className={cn('aspect-video rounded-xl border shadow-lg', className)} autoPlay playsInline loop muted>
        <source src={video} />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (image) {
    return (
      // !must use this div as a wrapper for `vertical` mode, otherwise image will not render
      <div>
        <div className={cn('aspect-video relative rounded-xl overflow-hidden border shadow-lg', className)}>
          <Image className="object-contain" src={image} alt="Feature Highlight" />
        </div>
      </div>
    );
  }

  return null;
};