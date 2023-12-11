import { team } from '@/fakers/data'
import React from 'react'
import TeamMemberSection from './components/TeamMemberSection'

type Props = {
  params : {
    teamId: string
  }
}

export default function TeamMember({params:{teamId}}: Props) {
  const filterdData = team.filter((item) => item.id === +teamId);
  return (
    <div>
      <TeamMemberSection filterdData={filterdData} />
    </div>
  )
}

export async function generateStaticParams(){
  return team.map(item => ({teamId: item.id.toString()}))
}