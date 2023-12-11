import { Metadata } from 'next'
import React from 'react'
import DepartmentsSection from './components/DepartmentsSection'

export const metadata: Metadata = {
  title: "Department",
  description: "Department Page"
}

export default function DepartmentsPage() {
  return (
    <div>
      <DepartmentsSection/>
        
    </div>
  )
}
