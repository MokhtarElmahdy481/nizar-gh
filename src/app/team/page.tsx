import Hero from '@/components/common/Hero/Hero'
import { Metadata } from 'next'
import React from 'react'
import TeamsSection from './components/TeamsSection'
import getAllDoctors from '@/lib/getAllDoctors'

export const metadata: Metadata = {
  title: "Team",
  description: "Team Page"
}

export default async function TeamPage() {
  const res = await getAllDoctors()
  const doctors = await res?.data
  return (
    <div>
        <TeamsSection doctors={doctors} />
    </div>
  )
}
