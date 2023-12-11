import { Metadata } from 'next'
import React from 'react'
import BranchSection from './components/branchSection/BranchSection'

export const metadata: Metadata = {
  title: "Branches",
  description: "Branches Page"
}






export default function BranchesPage() {
  
  return (
    <div>
      <BranchSection/>
        
    </div>
  )
}
