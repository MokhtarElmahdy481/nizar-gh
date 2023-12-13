import AboutSection from "@/components/home/About/AboutSection";
import BannerSection from "@/components/home/Banner/BannerSection";
import BranchesSection from "@/components/home/Branches/BranchesSection";
import CasesSection from "@/components/home/Cases/CasesSection";
import StatisticsSection from "@/components/home/Statistics/StatisticsSection";
import TeamSection from "@/components/home/Team/TeamSection";
import getDepartments from "@/lib/getDepartment";
import getSettings from "@/lib/getSettings";
import { Metadata } from "next";

// export const metadata:Metadata = {
//   title: "Home",
//   description: "This is Home Page"
// }

export default async function Home() {
  const statistics = await getSettings("statistics")
  const res = await getDepartments()
  const departments = await res?.data
  // console.log(departments)
  return (
    <div className="pb-16">
      <BannerSection departments={departments}/>
      <AboutSection/>
      <CasesSection/>
      <StatisticsSection statistics={statistics} />
      <TeamSection/>
      <BranchesSection/>
    </div>
  )
}
