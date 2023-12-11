import { Metadata } from "next";
import React from "react";
import AboutSection from "./components/AboutSection";

export const metadata: Metadata = {
  title: "About us",
  description: "About us Page"
}

export default function AboutPage() {
  return (
    <div>
      <AboutSection/>
    </div>
  );
}
