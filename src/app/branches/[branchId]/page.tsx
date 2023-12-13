// import { branches } from '@/fakers/data'
import BranchDetails from './components/BranchDetails'
import getAllBranches from '@/lib/getAllBranches'
type Props = {
  params:{
    branchId: string
  }
}
export default async function BranchDetailsPage({params: {branchId}}:Props) {
  const res = await getAllBranches()
  const branches = await res?.data

  const filterdData = branches.find((item: Branch) => item.id === +branchId);
  
  
  return (
    <div>
      <BranchDetails filterdData={filterdData} />
    </div>
  )
}

export async function generateStaticParams(){
  const res = await getAllBranches()
  const branches = await res?.data
  // console.log(branches);
  return branches.map((item: Branch) => ({branchId: item.id.toString()}))
  // console.log(branchesIds);
  // // return branchesIds.map
  //   return [
  //       {branchId : "1"},
  //       {branchId : "2"},
  //       {branchId : "3"},
  //       {branchId : "4"}
  //   ]
}
