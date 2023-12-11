"use client"
import Hero from "@/components/common/Hero/Hero";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Style from "./AboutNizar.module.css";

const imageList = [
  { id: 1, image: "/assets/about-center-1.png" },
  { id: 2, image: "/assets/about-center-2.png" },
  { id: 3, image: "/assets/about-center-3.png" },
  { id: 4, image: "/assets/about-center-4.png" },
];

export default function AboutNizarSection() {
    const {t} = useTranslation()
  return (
    <>
        <Hero showImg={true} showDesc={false} text={t("aboutNizar")} />
        <div className={Style["about-section"]}>
        <div className="container mx-auto px-5">
          <div className={`grid grid-cols-1 sm:grid-cols-3 `}>
            <div className="sm:col-span-1 flex justify-start">
              <div className={Style["image-wrapper"]}>
                <Image
                  src="/assets/doctor-nizar.png"
                  alt=""
                  width={850}
                  height={850}
                  className={Style["image"]}
                />
              </div>
            </div>
            <div className="sm:col-span-2 mb-3 sm:mb-0 flex flex-col justify-center">
              <div className={`card bg-transparent ${Style["custom-card"]}`}>
                <div className="card-body">
                  <h5 className="card-title">نبذة عن دكتور نزار</h5>
                  <p className="card-text">
                    من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي
                    توفر خدمات طب الاسنان والتجميل توفر خدمات طب الاسنان
                    والتجميل من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة
                    والتي توفر خدمات طب الاسنان والتجميل توفر خدمات طب الاسنان
                    والتجميل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <article className="py-5">
          <h2>{t("aboutCenter")}</h2>
          <p>
            من أعرق المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات
            طب الاسنان والتجميل توفر خدمات طب الاسنان والتجميل من أعرق
            المستشفيات التي نشأت بمنطقة المدينة المنورة والتي توفر خدمات طب
            الاسنان والتجميل توفر خدمات طب الاسنان والتجميل.
          </p>
        </article>
      </div>
      <div className="container mx-auto px-5">
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {imageList?.map(({ id, image }) => (
            <div className="col-12 col-sm-6 col-md-3" key={id}>
              <div className={`${Style["image-list-item"]}`}>
                <Image
                  src={image}
                  alt={`image - ${id}`}
                  width={1000}
                  height={300}
                  className="w-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
