"use client";
import Hero from "@/components/common/Hero/Hero";
import React from "react";
import { useTranslation } from "react-i18next";
import DepartmentDetailsData from "./DepartmentDetailsData";
// import DepartmentDetails from "@/components/departmentDetails/DepartmentDetails";
export default function DepartmentDetailsSection({filterdData}: {filterdData:Department[]}) {
    const { i18n } = useTranslation();

  return (
    <>
        <Hero
        text={
          i18n.language === "ar"
            ? filterdData[0].arTitle
            : filterdData[0].enTitle
        }
        showImg={true}
        hasImg={false}
        showDesc={true}
        desc={
          i18n.language === "ar" ? filterdData[0].arDesc : filterdData[0].enDesc
        }
        bg="#C7E1F1"
      />
      <DepartmentDetailsData data={filterdData[0]} />
    </>
  )
}
