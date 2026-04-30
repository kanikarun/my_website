'use client';

import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from '@/components/atoms/image';
import { NavigationBtn, NavigationProps } from '@/components/atoms/navigate-btn';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { TestimonialProps,  } from './interface';

interface Props {
  items: TestimonialProps[];
}

const navigator: NavigationProps['navigator'] = {
  next: 'testimonial-next',
  prev: 'testimonial-prev'
};

export const TestimonialList: React.FC<Props> = ({ items }) => {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="space-y-9 mt-7">
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        modules={[Navigation]}
        className="overflow-visible! mx-0 [&_.swiper-wrapper]:mb-0!"
        navigation={{
          nextEl: `.${navigator.next}`,
          prevEl: `.${navigator.prev}`
        }}
        onInit={() => setIsReady(true)}
        onProgress={(_, p) => setProgress(p * 100)}
      >
        {(items || []).map(x => (
          <SwiperSlide
            key={x.name}
            className={cn('h-auto! min-h-full max-w-sm md:max-w-[calc(33.33%-15px)]', { 'mr-7.5': !isReady })}
          >
            <TestimonialListItem {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto sm:mx-0 max-w-xs">
        <NavigationBtn progress={progress} navigator={navigator} />
      </div>
    </div>
  );
};

const TestimonialListItem = ({ name, position, image, content }: TestimonialProps) => {
  return (
    <Card className="overflow-visible relative h-full bg-white dark:bg-navy-blue/50">
      <CardContent className="flex flex-col items-center space-y-6 h-full relative">
        <div className="flex flex-col space-y-3 items-center">
          <Image src={image} alt={name} width={64} height={64} className="-mt-14 w-16 h-16 object-cover rounded-full" />

          <div className="flex flex-col space-y-1 items-center">
            <h2 className="font-bold dark:text-white">{name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{position}</p>
          </div>
        </div>

        <p className="text-base  flex-1 text-center">{content}</p>
      </CardContent>
    </Card>
  );
};