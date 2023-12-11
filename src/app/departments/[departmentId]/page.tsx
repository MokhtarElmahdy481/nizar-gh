import React from 'react'
import { departments } from "@/fakers/data";
import DepartmentDetailsSection from './components/DepartmentDetailsSection';
type Props = {
  params: {departmentId:string}
}

export default function DepartmentDetails({params : {departmentId}}: Props) {
  const filterdData = departments.filter((item) => item.id === +departmentId);

  
  return (
    <>
      <DepartmentDetailsSection filterdData={filterdData} />
    </>
  )
}
export async function generateStaticParams(){
  
  // return departments.map(item => ({departmentsId: item.id.toString()}))
  // console.log(branchesIds);
  // return branchesIds.map
    return departments.map(item => ({departmentId: item.id.toString()}))
}