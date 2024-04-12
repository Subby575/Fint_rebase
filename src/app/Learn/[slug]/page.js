"use client"
import React from 'react'


import { usePathname } from 'next/navigation'
import Modules from '@/app/_Component/Modules';
const page = () => {
    const path=usePathname();
    const pa=path.slice(7,13);
    //console.log(pa);
  return (
    <>
  <Modules params={pa}/>
    </>
  )
}

export default page