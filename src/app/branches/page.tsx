import { Metadata } from 'next'
import React from 'react'
import BranchSection from './components/branchSection/BranchSection'
import getAllBranches from '@/lib/getAllBranches'

export const metadata: Metadata = {
  title: "Branches",
  description: "Branches Page"
}






export default async function BranchesPage() {
  const res = await getAllBranches()
  const branches = await res?.data
  // console.log(branches);
  
  return (
    <div>
      <BranchSection branches={branches} />
        
    </div>
  )
}
