import Hero from '@/components/common/Hero/Hero'
import { Metadata } from 'next'
import React from 'react'
import TeamsSection from './components/TeamsSection'

export const metadata: Metadata = {
  title: "Team",
  description: "Team Page"
}

export default function TeamPage() {
  return (
    <div>
        <TeamsSection/>
    </div>
  )
}
