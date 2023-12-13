"use client"
import React from 'react'
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import style from "./branchDetails.module.css";
export default function BranchDetailsSection({data}:{data: Branch}) {
    const { t } = useTranslation();
    
  return (
    <div className="container mx-auto px-5">
      {/* categories*/}
      <div className="mb-4">
        <p className={`${style.cat} m-0 p-0 mb-6`}>{t("cat")}</p>
        <ul className={`m-0 p-0 mb-10 ${style.list}`}>
          {data?.departments?.map((item:any, index:number) => (
            <li key={index} className="mb-2">
              {item.description}
            </li>
          ))}
        </ul>
        <div className="">
          <div className={` py-2 ${style.doctorContainer}`}>
            <div className="container mx-auto px-5 text-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.doctores?.map((doctor:Doctor, index:number) => (
                  <div key={index} className=" mb-6">
                    <div className="flex flex-col items-center gap-2 py-4">
                      <Image
                        width={135}
                        height={135}
                        alt="doctor"
                        className={style.doctor}
                        src={doctor.image}
                      />
                      <p className={`m-0 p-0 ${style.title}`}>{doctor.name}</p>
                      <p className={`m-0 p-0 ${style.desc}`}>
                        {doctor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
