"use client"
import Crad from '@/app/_Component/Crad'
import React from 'react'
import { usePathname } from 'next/navigation'
const Page = () => {
  const path=usePathname();
  const pa=path.slice(7,9)
  // console.log("yooo"+pa)
  return (
    <>
    
    <Crad params={pa}/>
    </>
  )
}

export default Page