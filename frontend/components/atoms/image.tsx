'use client';

import NextImage, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import fallbackImage from '@/public/images/default-fallback-image.webp';

type Props = Omit<ImageProps, 'blurDataURL' | 'placeholder'> & {
  // ignoreBlur?: boolean;
  // blurhash?: string;
};

export const Image: React.FC<Props> = ({ className, /* ignoreBlur, */ src, ...props }) => {
  const [error, setError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null);

  useEffect(() => {
    function run() {
      setError(null);
    }
    run();
  }, [src]);

  return (
    <NextImage
      className={cn('object-cover select-none', className, { 'object-center': Boolean(error || !src) })}
      fill={!props.width && !props.height ? true : undefined}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
      onError={setError}
      src={error ? fallbackImage : src || fallbackImage}
      // blurDataURL={ignoreBlur ? undefined : blurhashToBase64(blurhash || 'L5Q,OAt8_4xu%MfQayfQ~qfR4nay')}
      // placeholder={ignoreBlur ? undefined : 'blur'}
      {...props}
    />
  );
};