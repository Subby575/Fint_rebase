"use client"
import { usePathname } from 'next/navigation'
import Game from '@/app/_Component/Game'
import React from 'react'
import '@/app/_Component/CSS/basic.css'
const page = () => {
  const path = usePathname();
  const pa = path.slice(17, 19);
  // console.log(pa)
  return (
    <>
      <nav className='absolute inline-block flex-1 w-screen h-screen z-10' >
        <h1 className='ml-4 bg-gradient-to-r from-indigo-400 to-cyan-400  mt-4 py-3 text-slate-100 pl-10 text-2xl rounded-lg'> Vishal&apos; Royal Enfield</h1>
      </nav>
      <div className='pt-32 inline-block'>

        <Game params={pa} />
      </div>
    </>
  )
}

export default page