"use client"
import style from "./branchCard.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const BranchCard = ({ data }:{data:Branch}) => {
  const {t,i18n} = useTranslation()
  return (
    <div className={`mb-6 ${"grid grid-cols-1 sm:grid-cols-5 "}`}>
      {/*card*/}
      {
        // data?.isReverse ? 
      //   (
      //   <>
      //   <div className={`col-span-1 sm:col-span-3 p-0 m-0 ${style.mapContainer}`}>
      //   <iframe
      //     title="Map"
      //     loading="lazy"
      //     allowFullScreen
      //     src={data.google_map}
      //   ></iframe>
      // </div>
      //   <div
        
      //   className={`p-0 m-0 col-span-1 sm:col-span-2  col-md-5 ${style.card} py-2`}
      // >
      //   <div className="flex flex-col items-center justify-center gap-3">
      //     <p className={`m-0 p-0 ${style.title} `}>
      //       {data.title }
      //       {/* {data.arTitle} */}
      //     </p>
      //     <p className={`m-0 p-0  ${style.desc} `}>
      //       {data.description}
      //       {/* {data.arDesc} */}
      //     </p>
      //     <Link
      //       href={`/branches/${data.id}`}
      //       className={`flex justify-center items-center gap-1 ${style.btn}`}
      //     >
      //       <span>{t("more")}</span>
      //       {i18n.language === "ar" ? (
      //         <IoIosArrowRoundBack size={20} />
      //       ) : (
      //         <IoIosArrowRoundForward size={20} />
      //       )}
            
      //     </Link>
      //   </div>
      // </div>
      
      //   </>)
      //   :
        (<>
        <div
        
        className={`p-0 m-0 col-span-1 sm:col-span-2 ${style.card} py-2`}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <p className={`m-0 p-0 ${style.title} `}>
            {data.title}
            {/* {data.arTitle} */}
          </p>
          <p className={`m-0 p-0  ${style.desc} `}>
            {data.description}
            {/* {data.arDesc} */}
          </p>
          <Link
            href={`/branches/${data.id}`}
            className={`flex justify-center items-center gap-1 ${style.btn}`}
          >
            <span>{t("more")}</span>
            {i18n.language === "ar" ? (
              <IoIosArrowRoundBack size={20} />
            ) : (
              <IoIosArrowRoundForward size={20} />
            )}
            
          </Link>
        </div>
      </div>
      <div className={`col-span-1 sm:col-span-3 p-0 m-0 ${style.mapContainer}`}>
        <iframe
          title="Map"
          loading="lazy"
          allowFullScreen
          src={data.google_map}
        ></iframe>
      </div>
        </>)
      }
      
    </div>
  );
};

export default BranchCard;
