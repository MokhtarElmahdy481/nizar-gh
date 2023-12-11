"use client";
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranselateEn from "./local/en.json";
import TranselateAr from "./local/ar.json";



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TranselateEn,
    },
    ar: {
      translation: TranselateAr,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  // getDirection: (lng: string) => {
  //   if (lng === 'ar') {
  //     return 'rtl';
  //   }
  //   // Default to 'ltr' for other languages
  //   return 'ltr';
  // },
},(err)=> {
  console.log(err);
  
});

export default i18n;
