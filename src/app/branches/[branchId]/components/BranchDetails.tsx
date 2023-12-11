"use client";

import Hero from "@/components/common/Hero/Hero";
import { useTranslation } from "react-i18next";
import BranchDetailsSection from "./BranchDetailsSection";

export default function BranchDetails({filterdData}:{filterdData: Branch[]}) {
  const {i18n} = useTranslation()
  return (
    <div>
      <Hero
        showDesc={true}
        showImg={false}
        bg="#CEEAE2"
        hasImg={false}
        title={
          i18n.language === "ar"
            ? filterdData[0].arTitle
            : filterdData[0].enTitle
        }
        desc={
          i18n.language === "ar" ? filterdData[0].arDesc : filterdData[0].enDesc
        }
      />
      <BranchDetailsSection data={filterdData[0]} />
    </div>
  )
}
