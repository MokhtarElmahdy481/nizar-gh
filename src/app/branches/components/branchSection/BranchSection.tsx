"use client"
import Hero from '@/components/common/Hero/Hero'
import { branches } from '@/fakers/data'
import React from 'react'
import BranchCard from '../branchCard/BranchCard'
import { useTranslation } from 'react-i18next'
export default function BranchSection() {
    const {t} = useTranslation()
  return (
    <div>
        <Hero showImg={true} showDesc={false} text={t("branches")} />
        {branches.map((item, index) => (
        <BranchCard key={index} data={item} />
      ))}
    </div>
  )
}
