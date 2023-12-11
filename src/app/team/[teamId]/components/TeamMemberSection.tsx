"use client";
import React from 'react'
import TeamDetails from './TeamDetails';
import Hero from '@/components/common/Hero/Hero';
import { useTranslation } from 'react-i18next';

export default function TeamMemberSection({filterdData}: {filterdData:Team[]}) {
  const { i18n } = useTranslation();
  
  return (
    <div>
        <Hero
        hasImg={true}
        showDesc={true}
        showImg={false}
        bg="#CEEAE2"
        img={filterdData[0].img}
        name={filterdData[0].name}
        jobTitle={filterdData[0].jobTitle}
      />
      <div className="container mx-auto px-5 my-5">
        <TeamDetails
          desc={
            i18n.language === "ar"
              ? filterdData[0].arDesc
              : filterdData[0].enDesc
          }
          allData={filterdData[0]}
        />
      </div>
    </div>
  )
}
