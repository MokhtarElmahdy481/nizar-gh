import { Typography } from "@/configurations/materialconfig";
import React from "react";

export default function StatisticsSection() {
  return (
    <div className="bg-[#C7E1F1] py-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="">
            <Typography className="font-bold text-6xl mb-10">+6</Typography>
            <Typography className="font-medium text-2xl">سنة خبرة</Typography>
          </div>
          <div className="">
            <Typography className="font-bold text-6xl mb-10">+700</Typography>
            <Typography className="font-medium text-2xl">مريض</Typography>
          </div>
          <div className="">
            <Typography className="font-bold text-6xl mb-10">+20</Typography>
            <Typography className="font-medium text-2xl">دكتور متخصص</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
