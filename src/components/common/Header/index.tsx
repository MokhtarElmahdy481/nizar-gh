import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type Props = {
  general: {
    logo: string;
    fav: string;
    title: string;
    description: string;
    copyRight: string;
  };
}

export default function Header({general}: Props) {
  return (
    <header>
        <Navbar general={general} />
        <Sidebar/>
    </header>
  )
}