import { branches } from '@/fakers/data'
import BranchDetails from './components/BranchDetails'
type Props = {
  params:{
    branchId: string
  }
}
export default function BranchDetailsPage({params: {branchId}}:Props) {
const filterdData = branches.filter((item) => item.id === +branchId);

  return (
    <div>
      <BranchDetails filterdData={filterdData} />
    </div>
  )
}

export function generateStaticParams(){
  return branches.map(item => ({branchId: item.id.toString()}))
  // console.log(branchesIds);
  // // return branchesIds.map
  //   return [
  //       {branchId : "1"},
  //       {branchId : "2"},
  //       {branchId : "3"},
  //       {branchId : "4"}
  //   ]
}
