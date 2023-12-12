
import { Metadata } from 'next'
import React from 'react'
import CasesSection from './components/CasesSection'
import getAllCases from '@/lib/getAllCases'

export const metadata: Metadata = {
  title: "Cases",
  description: "Cases Page"
}

export default async function CasesPage() {
  const res = await getAllCases()
  const cases = await res?.data
  return (
    <div>
        
        <CasesSection cases={cases} />
    </div>
  )
}
