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
    <div className="rounded-3xl shadow-md p-5 bg-[#C7CBF0]" key={data.id}>
      <Typography className="font-bold text-xl">طب الاسنان</Typography>
      <Typography className="font-normal text-lg">
        من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب
        الاسنان والتجميل.
      </Typography>
      <Link href={`/departments/${data.id}`}>
      <Button variant="text"  className="flex items-center gap-2">
        {t("read_more")}{" "}
        {i18n.language == "ar" ? (
          <span className="rotate-180">
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
          <span>
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
