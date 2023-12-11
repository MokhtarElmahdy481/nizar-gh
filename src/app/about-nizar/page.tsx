
import { Metadata } from "next";
import AboutNizarSection from "./components/AboutNizarSection";
import Hero from "@/components/common/Hero/Hero";

export const metadata: Metadata = {
  title: "About dr.Nizar",
  description: "About dr.Nizar Page"
}

export default function AboutNizar() {
  return (
    <div>
        <AboutNizarSection/>
    </div>
  )
}
