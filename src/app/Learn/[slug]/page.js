"use client"
import React from 'react'

import {data} from '@/AllFint'
import { usePathname } from 'next/navigation'
import Modules from '@/app/_Component/Modules';
import Navbar from '@/app/_Component/Navbar';
const Page = () => {
    const path=usePathname();
    const pa=path.slice(7,13);
    console.log(data);
    
  return (
    <>
    <Navbar/>
  <Modules params={pa}/>
    </>
  )
}

export default Page