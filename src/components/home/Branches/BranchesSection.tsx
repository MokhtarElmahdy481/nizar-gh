"use client";
import React from "react";
import { Typography, Button } from "@/configurations/materialconfig";
import { useTranslation } from "react-i18next";
const branches = [
  {
    id: 1,
    name: "فرع الرياض",
    description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  },
  {
    id: 2,
    name: "فرع المدينة",
    description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  },
  {
    id: 3,
    name: "فرع جدة",
    description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  },
  {
    id: 4,
    name: "فرع مكة",
    description: "من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة",
  },
];
export default function BranchesSection() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="rounded-[38px] py-10 p-5 bg-[#EBF7F3]">
          <div className="flex justify-center items-center gap-2 mb-16">
            <Typography className="font-bold text-5xl">
              {t("our_branches")}
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
            {branches.map((branch, index) => (
              <div className={`${index == branches.length-1 ? "" : "md:border-e-2 md:border-e-black/10"}`} key={branch.id}>
                <Typography className="font-bold text-3xl mb-5">
                  {branch.name}
                </Typography>
                <Typography className="font-normal text-lg mb-14">
                  {branch.description}
                </Typography>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
