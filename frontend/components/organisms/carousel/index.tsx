"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselItem, CarouselItemProps } from "./carousel-item";

export interface CarouselProps {
  data: Array<CarouselItemProps>;
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <Swiper
      effect="fade"
      navigation
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade, Pagination]}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet bg-white!",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      className="[&_.swiper-wrapper]:mb-0! [&_.swiper-pagination]:bottom-5!"
    >
      {data?.map((x, i) => (
        <SwiperSlide key={i}>
          <CarouselItem {...x} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
