"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import { Autoplay , Navigation } from "swiper/modules";
import { CardDefault } from '@/components/common/Cards/Card';
import { Typography } from '@/configurations/materialconfig';
import { useTranslation } from 'react-i18next';
export default function TeamSection() {
  const {t} = useTranslation()
  const swiperOptions = {
    loop: true,
    
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  };
  return (
    <div className="container mx-auto  py-5">
      <div className="flex justify-center items-center gap-2 mb-10">
          <Typography className="font-bold text-5xl">
            {t("team")}
          </Typography>
        </div>
      <div className="container mx-auto " dir='ltr'>
          <Swiper navigation={true} modules={[ Navigation]} {...swiperOptions} className="mySwiper">
            <SwiperSlide>
              <CardDefault bgColor={"bg-primary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
            <SwiperSlide>
              <CardDefault bgColor={"bg-secondary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
            <SwiperSlide>
              <CardDefault bgColor={"bg-primary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
            <SwiperSlide>
              <CardDefault bgColor={"bg-secondary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
            <SwiperSlide>
              <CardDefault bgColor={"bg-primary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
            <SwiperSlide>
              <CardDefault bgColor={"bg-secondary"} title="د/خالد المصري" description="فرع الدائري" />
            </SwiperSlide>
          </Swiper>
      </div>
        </div>
  )
}
