"use client";
import React from "react";
import style from "./teamDetails.module.css";
import { useTranslation } from "react-i18next";
type Props = {
  desc: string;
  allData: Doctor;
};
export default function TeamDetails({ desc, allData }: Props) {
  const { t, i18n } = useTranslation();
  console.log("Branches: ", allData?.branches);

  return (
    <div className="container mx-auto px-5">
      <p className={`m-0 p-0 mb-10 ${style.desc}`}>{desc}</p>
      <div className="flex items-center gap-1">
        <p className="m-0 p-0 font-bold">{t("exp")} : </p>
        <p className="m-0 p-0 ">
          {allData.experience} {t("years")}
        </p>
      </div>
      <div className="flex items-center gap-1 mb-10">
        <p className="m-0 p-0 font-bold">{t("statusNum")} : </p>
        <p className="m-0 p-0 ">
          {allData["patient number"]} {t("cases")}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="m-0 p-0 font-bold">{t("branch")} : </p>
        <p className="m-0 p-0 ">
          {allData?.branches?.map((branch) => (
            <>{branch?.title}</>
          ))}{" "}
        </p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <p className="m-0 p-0 font-bold">{t("app")} : </p>
        <p
          className="m-0 p-0 "
          dangerouslySetInnerHTML={{ __html: allData["work day"] }}
        ></p>
      </div>
      <p className="m-0 p-0 ">
        
        {/* {i18n.language === "ar" ? allData.arTime : allData.enTime}{" "} */}
      </p>
    </div>
  );
}
