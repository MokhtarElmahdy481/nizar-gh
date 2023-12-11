"use client"
import Hero from '@/components/common/Hero/Hero'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PatientsSection() {
    const {t} = useTranslation()
  return (
    <>
        <Hero showImg={true} showDesc={false} text={t("patients")} />
        PatientsPage
    </>
  )
}
