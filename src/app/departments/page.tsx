import { Metadata } from 'next'
import React from 'react'
import DepartmentsSection from './components/DepartmentsSection'
import getDepartments from '@/lib/getDepartment'

export const metadata: Metadata = {
  title: "Department",
  description: "Department Page"
}

export default async function DepartmentsPage() {
  const res = await getDepartments()
  const departments = await res?.data
  console.log(departments)
  return (
    <div>
      <DepartmentsSection departments={departments}/>
        
    </div>
  )
}
