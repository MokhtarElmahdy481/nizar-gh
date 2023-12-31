"use client";
import Hero from "@/components/common/Hero/Hero";
import { CardDefault } from "@/components/common/Cards/Card";
import { Typography } from "@/configurations/materialconfig";
import React from "react";
import { useTranslation } from "react-i18next";
// import { cases } from "@/fakers/data";
export default function CasesSection({cases}:{cases:Patient[]}) {
  const { t,i18n } = useTranslation();
console.log("cases: " , cases);

  
  return (
    <>
      <Hero showImg={true} showDesc={false} text={t("cases")} />
      <div className="py-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {
            cases.map((item , index) => <>
              <CardDefault 
              // title={i18n.language === "ar" ? arTitle: enTitle} 
              // description={i18n.language === "ar" ? arDesc: enDesc}
              image={item?.before}
              bgColor={index % 2 === 0?"#C7CBF0":"#CEEAE2"}
              key={item?.id} 
            />
            </>)
          }
          {/* {
          cases?.map((case)=>(
            <>
            {case.id}
            </>
          ))
            } */}
            {/* <CardDefault 
              title={i18n.language === "ar" ? arTitle: enTitle} 
              description={i18n.language === "ar" ? arDesc: enDesc}
              image={img}
              bgColor={index % 2 === 0?"#C7CBF0":"#CEEAE2"}
              key={id} 
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
