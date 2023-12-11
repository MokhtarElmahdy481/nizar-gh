"use client"
import React from 'react'
import { Typography,Input } from "@/configurations/materialconfig";
export default function ContactForm() {
  return (
    <div className="bg-[#CEEAE2] mx-auto mb-5 md:mb-0 rounded-3xl shadow-lg p-5 pe-64 w-full md:w-96">
      <div className="flex justify-start items-center gap-2 mb-2">
      <Input variant="standard" label="الإسم" crossOrigin />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
      <Input variant="standard" label="الايميل" crossOrigin />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
      <Input variant="standard" label="رقم الموبايل" crossOrigin />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
      <Input variant="standard" label="الرسالة" crossOrigin />
      </div>

    </div>
  )
}
