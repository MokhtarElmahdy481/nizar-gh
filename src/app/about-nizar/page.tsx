
import { Metadata } from "next";
import AboutNizarSection from "./components/AboutNizarSection";
import Hero from "@/components/common/Hero/Hero";
import getAboutDrNazar from "@/lib/getAboutDrNazar";

export const metadata: Metadata = {
  title: "About dr.Nizar",
  description: "About dr.Nizar Page"
}

export default async function AboutNizar() {
  const res = await getAboutDrNazar()
  const aboutNizar = await res?.data
  console.log(aboutNizar)
  return (
    <div>
        <AboutNizarSection aboutNizar={aboutNizar}/>
    </div>
  )
}
