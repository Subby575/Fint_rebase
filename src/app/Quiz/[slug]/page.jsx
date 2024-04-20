"use client"
import Quiz from '@/app/_Component/Test'
import React from 'react'
import { usePathname } from 'next/navigation'

const Page = () => {
  const path=usePathname();
  const mo=path.slice(6,11);
  // console.log("hello"+mo);
  return (
    <>       
        <Quiz params={mo}/>

      
    </>
  )
}

export default Page