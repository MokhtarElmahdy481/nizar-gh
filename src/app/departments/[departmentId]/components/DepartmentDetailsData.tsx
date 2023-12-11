"use client";
import React from "react";
import style from "./dep.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
export default function DepartmentDetailsData({ data } : {data: Department}) {
    const { t } = useTranslation();
    return (
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between mb-10">
          <div>
            <p className={`font-bold m-0 p-0 mb-6 ${style.specialtitle}`}>
              {t("specialties")}
            </p>
            <ul className={`m-0 p-0 ${style.list}`}>
              {data.specialties.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image alt="specail-img" src={data.subImg} width={330} height={370} />
        </div>
        <div className="grid grid-cols-1">
          <div className={`${style.mainContainer}`}>
            <div className="container mx-auto px-5 bg-[#CEEAE2] rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data.doctors.map((item, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-3 py-2">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        alt="doctor/img"
                        src={item.img}
                        width={130}
                        height={130}
                      />
                      <p className={`m-0 p-0 ${style.name}`}>{item.name}</p>
                      <p className={`m-0 p-0 ${style.desc}`}>{item.jobTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
