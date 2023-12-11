"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });
const rabar = localFont({
  src: "./fonts/alfont_com_AlFont_com_GE_SS_TWO_MEDIUM_5.otf",
  variable: "--font-rabar",
  display: "swap",
});

export default function LangWrapper({ children }: Props) {
  let lang: string = "";
  const { i18n } = useTranslation();
  if (typeof window !== "undefined") {
    lang = localStorage.getItem("lang")
      ? JSON.parse(localStorage.getItem("lang")!)
      : "en";
  }
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
    i18n.changeLanguage(lang);
  }, [lang,i18n]);
  return (
    <>
      <body
        className={`${i18n.language== "ar" ? rabar.className : inter.className} 
    flex min-h-screen flex-col`}
      >
        {children}
      </body>
    </>
  );
}
