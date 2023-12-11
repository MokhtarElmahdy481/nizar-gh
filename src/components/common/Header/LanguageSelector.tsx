"use client";
import { Avatar } from "@/configurations/materialconfig";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  let lang: string = "";
  if (typeof window !== 'undefined'){
    lang = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang")!)
    : "en";

  }

  const handleSelectedLangAr = () => {
    i18n.changeLanguage("ar");
    window.localStorage.setItem("lang", JSON.stringify("ar"));
    window.location.reload();
  };
  const handleSelectedLangEn = () => {
    i18n.changeLanguage("en");
    window.localStorage.setItem("lang", JSON.stringify("en"));
    window.location.reload();
  };

  return (
    <div style={{ flexGrow: 0 }}>
      {lang === "ar" ? (
        
          <button onClick={handleSelectedLangEn} style={{ padding: 0 }}>
            <Avatar alt={i18n.language} src={`/assets/gb.svg`} />
          </button>
        
      ) : (
          <button onClick={handleSelectedLangAr} style={{ padding: 0 }}>
            <Avatar alt={i18n.language} src={`/assets/sa.svg`} />
          </button>
      )}
    </div>
  );
};

export default LanguageSelector;
