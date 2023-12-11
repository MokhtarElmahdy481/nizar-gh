'use client'
import Hero from '@/components/common/Hero/Hero'
import { useTranslation } from 'react-i18next'
import ContactForm from './ContactForm'
import ContactSocial from './ContactSocial'

export default function ContactSection() {
    const {t} = useTranslation()
  return (
    <>
        <Hero showImg={true} showDesc={false} text={t("contact")} />
        
        <div className="container mx-auto px-5 py-5">
          <ContactForm/>
          <ContactSocial/>
        
        </div>
    </>
  )
}
