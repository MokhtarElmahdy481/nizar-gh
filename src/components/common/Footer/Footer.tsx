"use client";
import React from "react";
import { List, ListItem, Typography } from "@/configurations/materialconfig";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { pages } from "@/fakers/data";
import { Url } from "url";
// import logo from "/assets/logo.svg";

type Props = {
  general: {
    logo: string;
    fav: string;
    title: string;
    description: string;
    copyRight: string;
  };
  socialMedia: {
    facebook?: Url;
    linkedIn?: Url;
    twitter?: Url;
    instagram?: Url;
    tiktok?: Url;
    youtube?: Url;
    snapChat?: Url;
    email?: string;
    phone?: string;
    address?: string;
    herag?: string;
  };
};
// const socialMedia = [
//   {
//     img: "/assets/facebook.svg",
//     path: "www.facebook.com",
//   },
//   {
//     img: "/assets/whats.svg",
//     path: "https://wa.me/+201022153359",
//   },
//   {
//     img: "/assets/twitter.svg",
//     path: "www.twitter.com",
//   },
// ];
export default function Footer({ general, socialMedia }: Props) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  // console.log(pathname);

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
                  alt={general?.title}
                  src={general?.logo}
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
              {socialMedia.facebook && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.facebook}
                >
                  facebook
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.linkedIn && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.linkedIn}
                >
                  linkedIn
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.twitter && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.twitter}
                >
                  twitter
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.instagram && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.instagram}
                >
                  instagram
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.youtube && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.youtube}
                >
                  youtube
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.snapChat && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.snapChat}
                >
                  snapChat
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
              {socialMedia.tiktok && (
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href={socialMedia.tiktok}
                >
                  tiktok
                  {/* <Image
                  width={50}
                  height={50}
                  alt="social/img"
                  src={item.img}
                /> */}
                </Link>
              )}
            </div>
          </div>
          <div className="p-4">
            {
              socialMedia.address && <div>
                <h5 className="font-bold">{t("location")}</h5>
                <p className="mb-4 font-light">{socialMedia.address}</p>
              </div>
            }
            {
              socialMedia.herag && <div>
                <h5 className="font-bold">{t("appointments")}</h5>
                <p className="mb-4 font-light">{socialMedia.herag}</p>
              </div>
            }
            {
              socialMedia.phone && <div>
                <h5 className="font-bold">{t("call")}</h5>
                <p className="mb-4 font-light">{socialMedia.phone}</p>
              </div>
            }
            
          </div>
          <div className="p-4">
            <ul>
              <h5>{t("pages")}</h5>
              {pages?.map(({ enTitle, arTitle, path }, index) => (
                <li className="mb-3" key={index}>
                  <Link
                    href={path}
                    className={pathname == path ? "cursor-default" : ""}
                  >
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
