"use client"
import { Carousel, Typography, Button } from "@material-tailwind/react";


import { CarouselContent } from "@/fakers/data"; 
import Image from "next/image";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export default function CarouselWithContent() {
    const {t,i18n} = useTranslation()
  return (
    <Carousel 
    navigation={({ setActiveIndex, activeIndex, length }) => (
        <></>
      )}
    className="rounded-xl" 
    dir="ltr">
      {
        CarouselContent.map(({id , img,arTitle,arDesc,enDesc,enTitle}, index) => (
        <div className="relative h-full w-full" key={id}>
        <Image
          src={img}
          alt={enTitle}
          height={600}
        width={600}
        
        
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          
          
          <div className={twMerge("w-3/4 md:w-full px-16",i18n.language == "ar" ? "text-right" : "text-left")}>
            <Typography
              variant="h1"
              color="inherit"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                {
                    i18n.language == "ar" ? arTitle : enTitle
                }
              
            </Typography>
            <Typography
              variant="lead"
              color="inherit"
              className="mb-12 opacity-80"
            >
              {
                    i18n.language == "ar" ? arDesc : enDesc
                }
            </Typography>

          </div>
        </div>
      </div>))
      }

    </Carousel>
  );
}