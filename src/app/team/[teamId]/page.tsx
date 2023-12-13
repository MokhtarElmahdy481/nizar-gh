// import { team } from '@/fakers/data'
import React from 'react'
import TeamMemberSection from './components/TeamMemberSection'
import getAllDoctors from '@/lib/getAllDoctors'

type Props = {
  params : {
    teamId: string
  }
}

export default async function TeamMember({params:{teamId}}: Props) {
  const res = await getAllDoctors()
  const doctors = await res?.data
  const filterdData = doctors.filter((item: Doctor) => item.id === +teamId);
  // console.log(filterdData);
  
  return (
    <div>
      <TeamMemberSection filterdData={filterdData} />
    </div>
  )
}

export async function generateStaticParams(){
  const res = await getAllDoctors()
  const doctors = await res?.data
  return doctors.map((item:Doctor) => ({teamId: item.id.toString()}))
}