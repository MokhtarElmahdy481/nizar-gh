"use client";
import { Typography, Button } from "@/configurations/materialconfig";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const {t,i18n} = useTranslation()
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 bg-white flex flex-col justify-center">
            <div className="flex flex-col justify-between items-start">
              <Typography className="font-bold text-5xl mb-6">
                من نحن وماذا نفعل
              </Typography>
              <Typography className="font-normal text-xl mb-16">
                من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
                خدمات طب الاسنان والتجميل.
              </Typography>
              <Button variant="outlined" className="flex items-center gap-3 rounded-full text-lg hover:bg-[#C7E1F1]">
                {t("read_more")} {" "}
                {
                  i18n.language == "ar"?
                  (<span className="rotate-180">
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                  </span>)
                  :
                  (<span>
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                  </span>)
                }
              </Button>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="w-75">
              <Image
                src="/assets/About-Section-bg.png"
                alt="about-bg"
                width={600}
                height={400}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
