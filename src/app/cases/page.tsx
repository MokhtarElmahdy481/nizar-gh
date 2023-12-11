
import { Metadata } from 'next'
import React from 'react'
import CasesSection from './components/CasesSection'

export const metadata: Metadata = {
  title: "Cases",
  description: "Cases Page"
}

export default function CasesPage() {
  return (
    <div>
        
        <CasesSection />
    </div>
  )
}
