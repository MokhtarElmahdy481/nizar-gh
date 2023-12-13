"use client";
import Hero from "@/components/common/Hero/Hero";
import React from "react";
import { useTranslation } from "react-i18next";
import DepartmentDetailsData from "./DepartmentDetailsData";
// import DepartmentDetails from "@/components/departmentDetails/DepartmentDetails";
export default function DepartmentDetailsSection({filterdData}: {filterdData:Department[]}) {
    const { i18n } = useTranslation();
    console.log(filterdData[0].specialist);
    

  return (
    <>
        <Hero
        text={filterdData[0]?.title}
        showImg={true}
        hasImg={false}
        showDesc={true}
        desc={filterdData[0]?.des}
        bg="#C7E1F1"
      />
      <DepartmentDetailsData data={filterdData[0]} />
    </>
  )
}
