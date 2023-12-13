"use client";
import React from 'react'
import TeamDetails from './TeamDetails';
import Hero from '@/components/common/Hero/Hero';
import { useTranslation } from 'react-i18next';

export default function TeamMemberSection({filterdData}: {filterdData:Doctor[]}) {
  const { i18n } = useTranslation();
  console.log("filterdData: ",filterdData);
  
  return (
    <div>
        <Hero
        hasImg={true}
        showDesc={true}
        showImg={false}
        bg="#CEEAE2"
        img={filterdData[0].image}
        name={filterdData[0].name}
        jobTitle={filterdData[0].des}
      />
      <div className="container mx-auto px-5 my-5">
        <TeamDetails
          desc={filterdData[0].des}
          allData={filterdData[0]}
        />
      </div>
    </div>
  )
}
