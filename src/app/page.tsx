import AboutSection from "@/components/home/About/AboutSection";
import BannerSection from "@/components/home/Banner/BannerSection";
import BranchesSection from "@/components/home/Branches/BranchesSection";
import CasesSection from "@/components/home/Cases/CasesSection";
import StatisticsSection from "@/components/home/Statistics/StatisticsSection";
import TeamSection from "@/components/home/Team/TeamSection";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Home",
  description: "This is Home Page"
}

export default function Home() {
  return (
    <div className="pb-16">
      <BannerSection/>
      <AboutSection/>
      <CasesSection/>
      <StatisticsSection/>
      <TeamSection/>
      <BranchesSection/>
    </div>
  )
}
