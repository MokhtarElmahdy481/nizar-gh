import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <Navbar/>
        <Sidebar/>
    </header>
  )
}