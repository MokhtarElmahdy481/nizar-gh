import React from 'react'
// import { departments } from "@/fakers/data";
import DepartmentDetailsSection from './components/DepartmentDetailsSection';
import getDepartments from '@/lib/getDepartment';
type Props = {
  params: {departmentId:string}
}

export default async function DepartmentDetails({params : {departmentId}}: Props) {
  // const filterdData = departments.filter((item) => item.id === +departmentId);
  const res = await getDepartments()
  const departments = await res?.data
  const filterdData = await  departments.filter((item: Department) => item.id === +departmentId)
  console.log("dpartment id" , filterdData)
  
  return (
    <>
      <DepartmentDetailsSection filterdData={filterdData} />
    </>
  )
}
export async function generateStaticParams(){
  const res = await getDepartments()
  const departments = await res?.data
  // console.log(departments)
  // return departments.map(item => ({departmentsId: item.id.toString()}))
  // console.log(branchesIds);
  // return branchesIds.map
    return departments.map((item: Department) => ({departmentId: item.id.toString()}))
}