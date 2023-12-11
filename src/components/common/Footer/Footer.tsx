"use client";
import React from "react";
import { List, ListItem, Typography } from "@/configurations/materialconfig";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useTranslation } from "react-i18next";
import { pages } from "@/fakers/data";
// import logo from "/assets/logo.svg";

type Props = {};
const socialMedia = [
  {
    img: "/assets/facebook.svg",
    path: "www.facebook.com",
  },
  {
    img: "/assets/whats.svg",
    path: "https://wa.me/+201022153359",
  },
  {
    img: "/assets/twitter.svg",
    path: "www.twitter.com",
  },
];
export default function Footer({}: Props) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname()
  console.log(pathname);
  
  
  return (
    <div className="shadow-2xl shadow-black">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="p-4 flex flex-col  gap-4">
            <div className="w-[100px]">
            <Link href="/">
              <Image
                width={200}
                height={100}
                alt="logo/img"
                src={"/assets/logo.svg"}
                priority
                className="pointer w-full"
                
              />
            </Link>
            </div>
            <Typography color="inherit" className="font-semibold">
              من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
              خدمات طب الاسنان والتجميل.
            </Typography>
            <div className="flex items-center gap-1 flex-wrap">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  rel="noreferrer"
                  target="_blank"
                  href={item.path}
                >
                  <Image
                    width={50}
                    height={50}
                    alt="social/img"
                    src={item.img}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4">
            <ul className="mb-4">
              <h5 className="font-bold">{t("location")}</h5>
              <li className="font-light">ش الملك عبد الله, الرياض المملكة العربية.</li>
              <li className="font-light">ش الملك عبد العزيز, المدينة, المملكة العربية.</li>
            </ul>
            <ul className="mb-4">
              <h5 className="font-bold">{t("appointments")}</h5>
              <li className="font-light">السبت والثلاثاء والخميس</li>
              <li className="font-light">من الساعة التاسعة صباحا الي الخامسة مساء</li>
            </ul>
            <ul className="mb-4">
              <h5 className="font-bold">{t("call")}</h5>
              <li className="font-light">+992 665 770 8</li>
              <li className="font-light">+992 888 3666</li>
            </ul>
          </div>
          <div className="p-4">
            <ul>
              <h5>{t("pages")}</h5>
              {pages?.map(({ enTitle, arTitle, path }, index) => (
                <li className="mb-3" key={index}>
                  <Link href={path} className={pathname == path ? "cursor-default" : ""} >
                    {i18n.language == "ar" ? arTitle : enTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
