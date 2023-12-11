"use client";
import Hero from "@/components/common/Hero/Hero";
import React from "react";
import { useTranslation } from "react-i18next";
import { team } from "@/fakers/data";
import Image from "next/image";
import Link from "next/link";
export default function TeamsSection() {
    const {t} = useTranslation()
  return (
    <div>
        <Hero showImg={true} showDesc={false} text={t("team")} />
        <div className="container mx-auto px-5 mt-3 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          {team.map((item, index) => (
            <div className="mb-10" key={index}>
              <Link
                className="teamLink flex items-center gap-3 "
                href={`/team/${item.id}`}
                key={index}
              >
                <Image width={100} height={100} alt="team/img" src={item.img} />
                <div className="teamDetails">
                  <p className={`m-0 p-0 mb-2 teamName `}>{item.name}</p>
                  <p className={`m-0 p-0 mb-1 teamTitle `}>{item.jobTitle}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
