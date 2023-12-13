"use client"
import React from "react";
import Hero from "@/components/common/Hero/Hero";
import { Button, Typography } from "@/configurations/materialconfig";
// import { departments } from '../../../fakers/data';
import { useTranslation } from "react-i18next";
import DepartmentCard from "@/app/departments/components/DepartmentCard";
import Caroousel from "@/components/common/Carousel";


export default function BannerSection({departments}:{departments:Department[]}) {
  const {t,i18n} = useTranslation()
  
  return (
    <div>
      {/* <Hero showImg={true} showDesc={false} text={t("home")} /> */}
      <Caroousel/>
      <div className="container mx-auto px-5 translate-y-5 sm:-translate-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            departments?.map((department)=>(
          <DepartmentCard data={department} key={department.id} />

            ))
          }
        </div>
      </div>
    </div>
  );
}
