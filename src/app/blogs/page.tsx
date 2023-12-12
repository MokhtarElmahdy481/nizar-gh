import { blogs } from '@/fakers/data'
import React from 'react'
import AllBlogs from './components/allBlogs'

export default function BlogsPage() {
  
  return (
    <div className='container mx-auto px-16'>
      <AllBlogs blogs={blogs}/>
    </div>
  )
}
