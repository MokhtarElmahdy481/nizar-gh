"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import style from "./DepartmentCard.module.css";
import { Button, Typography } from "@/configurations/materialconfig";
type Props = { data: Department };

export default function DepartmentCard({ data }: Props) {
  const { i18n, t } = useTranslation();
  return (
    <div
      className="rounded-3xl shadow-xl p-5 bg-secondary transition-colors hover:bg-white"
      key={data.id}
    >
      <div className=" flex items-center gap-4 mb-10">
        <div className="">
          <Image src={data?.img} alt="" />
        </div>
        <Typography className="font-bold text-2xl">
          {i18n.language == "ar" ? data?.arTitle : data?.enTitle}
        </Typography>
      </div>

      <Typography className="font-normal text-lg">
        {i18n.language == "ar" ? data?.arDesc : data?.enDesc}
      </Typography>
      <Link href={`/departments/${data.id}`}>
      <Button
                  variant="text"
                  className="flex items-center gap-2 font-bold text-lg hover:text-xl bg-transparent hover:bg-transparent"
                  
                >
                  {t("read_more")}{" "}
                  {i18n.language == "ar" ? (
                    <span className="rotate-180 -mb-2">
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
                    </span>
                  ) : (
                    <span className="-mb-2">
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
                    </span>
                  )}
                </Button>
      </Link>
    </div>
  );
}
