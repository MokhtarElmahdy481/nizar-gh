import { Metadata } from "next";
import React from "react";
import AboutSection from "./components/AboutSection";
import getAboutUs from "@/lib/getAboutUs";

export const metadata: Metadata = {
  title: "About us",
  description: "About us Page"
}

export default async function AboutPage() {
  const res = await getAboutUs()
  const aboutUs = await res?.data
  // console.log(aboutUs)
  
  return (
    <div>
      <AboutSection aboutUs={aboutUs}/>
    </div>
  );
}
