import { Typography } from "@/configurations/materialconfig";
import React from "react";

type Props = {
  statistics :{
    "statisticsNumber1": string,
    "statisticsTitle1": string,
    "statisticsNumber2": string,
    "statisticsTitle2": string,
    "statisticsNumber3": string,
    "statisticsTitle3": string
}
}

export default function StatisticsSection({statistics}: Props) {
  return (
    <div className="bg-[#C7E1F1] py-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="">
            <Typography className="font-bold text-6xl mb-10">{statistics?.statisticsNumber1}</Typography>
            <Typography className="font-medium text-2xl">{statistics?.statisticsTitle1}</Typography>
          </div>
          <div className="">
            <Typography className="font-bold text-6xl mb-10">{statistics?.statisticsNumber2}</Typography>
            <Typography className="font-medium text-2xl">{statistics?.statisticsTitle2}</Typography>
          </div>
          <div className="">
            <Typography className="font-bold text-6xl mb-10">{statistics?.statisticsNumber3}</Typography>
            <Typography className="font-medium text-2xl">{statistics?.statisticsTitle3}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
