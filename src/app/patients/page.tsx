import Hero from '@/components/common/Hero/Hero'
import { Metadata } from 'next'
import React from 'react'
import PatientsSection from './components/PatientsSection'

export const metadata: Metadata = {
  title: "Patients",
  description: "Patients Page"
}

export default function PatientsPage() {
  return (
    <div>
      <PatientsSection/>
        
    </div>
  )
}
