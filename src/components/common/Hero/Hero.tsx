import React from "react";
import style from "./hero.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type HeroProps = {
    showImg?:boolean;
  showDesc?:boolean;
  bg?:string;
  text?:string;
  hasImg?:boolean;
  title?:string;
  desc?:string;
  img?:string;
  name?:string;
  jobTitle?:string;
}
const Hero = ({
  showImg,
  showDesc,
  bg,
  text,
  hasImg,
  title,
  desc,
  img,
  name,
  jobTitle,
}:HeroProps) => {
  return (
    <div>
      {showImg && (
        <div className={style.heroSection}>
          <div>
            <p className={`m-0 p-0 ${style.pageName}`}>{text}</p>
            <p className={`m-0 p-0 text-center ${style.text}`}>{text}</p>
          </div>
        </div>
      )}
      {showDesc && (
        <div
          style={{ backgroundColor: bg }}
          className={`mb-4 ${style.descContainer}`}
        >
          <div className="container mx-auto px-5">
            {hasImg ? (
              <div className="flex items-center gap-3">
                <Image alt="doctor" width={150} height={150} src={img ? img : ""} />
                <div>
                  <p className={`${style.name} m-0 p-0 mb-6`}>{name}</p>
                  <p className={`${style.jobTitle} m-0 p-0 `}>{jobTitle}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-1">
                  <p>{title}</p>
                  <p className= {style.desc}>{desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
