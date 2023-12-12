import React from 'react'
import { blogs } from '@/fakers/data';
type Props = {
  params:{
    blogId: string
  }
}
export default function BlogDetails({params: {blogId}}:Props) {
  const filterdData = blogs.filter((item) => item.id === +blogId);
  return (
    <div>BlogDetails</div>
  )
}
export async function generateStaticParams(){
  return blogs.map(item => ({blogId: item.id.toString()}))
}