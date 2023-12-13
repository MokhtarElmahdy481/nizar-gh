"use client";

import Hero from "@/components/common/Hero/Hero";
import { useTranslation } from "react-i18next";
import BranchDetailsSection from "./BranchDetailsSection";

export default function BranchDetails({filterdData}:{filterdData: Branch}) {
  const {i18n} = useTranslation()
  // console.log(filterdData);
  
  return (
    <div>
      <Hero
        showDesc={true}
        showImg={false}
        bg="#CEEAE2"
        hasImg={false}
        title={filterdData.title}
        desc={filterdData.description}
      />
      <BranchDetailsSection data={filterdData} />
    </div>
  )
}
