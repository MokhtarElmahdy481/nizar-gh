
import { Metadata } from 'next'
import React from 'react'

import ContactSection from './components/ContactSection'

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page"
}

export default function ContactPage() {
  return (
    <div>
      <ContactSection/>
        
    </div>
  )
}
