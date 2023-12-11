"use client"
import Hero from '@/components/common/Hero/Hero'
import React from 'react'
import { useTranslation } from 'react-i18next'
import DepartmentCard from './DepartmentCard'
import { departments } from '@/fakers/data'

export default function DepartmentsSection() {
    const {t} = useTranslation()
  return (
    <>
        <Hero showImg={true} showDesc={false} text={t("departments")} />
        <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {departments.map((item: Department, index:number) => (
            <DepartmentCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  )
}
