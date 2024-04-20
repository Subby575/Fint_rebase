"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Game from '../../_Component/Game'
const Page = () => {
  const path=usePathname();
  const pa=path.slice();
  console.log(pa)
  return (
    <>
   {/* <Fix/> */}
   {/* <Test/> */}
   <Game/>
    </>
  )
}

export default Page