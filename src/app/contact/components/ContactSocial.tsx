import { Typography } from "@/configurations/materialconfig";
import React from "react";

export default function ContactSocial() {
  return (
    <div className="bg-[#C7CBF0] rounded-3xl mx-auto shadow-lg p-5 w-full md:w-96">
      <div className="flex justify-start items-center gap-2 mb-2">
        <Typography className="font-bold text-xl">كلمنا</Typography>
      </div>
      <div className="mb-10">
        <Typography className="font-normal text-lg">+992 665 770 8</Typography>
        <Typography className="font-normal text-lg">+992 888 3666</Typography>
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
        <Typography className="font-bold text-xl">مواقعنا</Typography>
      </div>
      <div className="">
        <Typography className="font-normal text-lg">
          ش الملك عبد الله, الرياض المملكة العربية.
        </Typography>
        <Typography className="font-normal text-lg">
          ش الملك عبد العزيز, المدينة, المملكة العربية.
        </Typography>
      </div>
    </div>
  );
}
