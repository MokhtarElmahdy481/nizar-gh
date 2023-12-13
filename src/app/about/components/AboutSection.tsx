"use client";
import Hero from "@/components/common/Hero/Hero";
import { Typography } from "@/configurations/materialconfig";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutSection({ aboutUs }: { aboutUs: AboutUs }) {
  const { t } = useTranslation();
  return (
    <>
      <Hero showImg={true} showDesc={false} text={aboutUs?.headerTitle} />
      <div className="bg-[#CEEAE2] py-3">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-4">
              <div className="mb-8">
                <Typography
                  color="blue-gray"
                  className="text-3xl font-bold mb-6"
                >
                  الرسالة
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
                  خدمات طب الاسنان والتجميل.
                </Typography>
              </div>
              <div className="">
                <Typography
                  color="blue-gray"
                  className="text-3xl font-bold mb-6"
                >
                  الرؤية
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
                  خدمات طب الاسنان والتجميل.
                </Typography>
              </div>
            </div>
            <div className="p-4 flex justify-end">
              <div className={"image-wrapper"}>
                <Image
                  src="/assets/doctor-nizar.png"
                  alt=""
                  width={850}
                  height={850}
                  className={"image"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C7CBF0] py-8">
        <div className="text-center">
          <Typography color="blue-gray" className="text-3xl font-bold mb-6">
            الاهداف
          </Typography>
        </div>
        <ul className="flex justify-center text-xl gap-8">
          {aboutUs?.goals?.map((goal, index) => (
            <li className="list-disc" key={index}>
              {goal}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#CEEAE2] py-3 mb-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-4 flex justify-start">
              <div className={"image-wrapper"}>
                <Image
                  src="/assets/doctor-nizar.png"
                  alt=""
                  width={850}
                  height={850}
                  className={"image"}
                />
              </div>
            </div>
            <div className="p-4">
              <div className="mb-8">
                <Typography
                  color="blue-gray"
                  className="text-3xl font-bold mb-6"
                >
                  المهمة
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
                  خدمات طب الاسنان والتجميل.
                </Typography>
              </div>
              <div className="">
                <Typography
                  color="blue-gray"
                  className="text-3xl font-bold mb-6"
                >
                  القيمة
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                  من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر
                  خدمات طب الاسنان والتجميل.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
