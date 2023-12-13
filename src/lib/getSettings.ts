import { request } from "./createApi";

type SettingType = 'general' | 'socialMedia' | 'statistics' | 'header' | 'schdule';

export default async function getSettings(key:SettingType) {
  // const res = await fetch(
  //   `http://drnizer.admin.technomasrsystems.com/api/settings`,
  //   {
  //     headers: {
  //       lang: "ar",
  //     },
  //   }
  // );
  const res = await request({url: `/settings`})
  // if (!res.ok) throw new Error("Failed to Fetch Data");
  switch(key){
    case 'general': return res?.data?.data?.general;
    case 'socialMedia': return res?.data?.data?.socialMedia;
    case 'statistics': return res?.data?.data?.statistics;
    case 'header': return res?.data?.data?.header;
    case 'schdule': return res?.data?.data?.schdule;
  }
  
}
