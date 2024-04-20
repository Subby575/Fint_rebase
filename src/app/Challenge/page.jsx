import React from 'react'
import Chall from '../_Component/Chall/Chall'
import Image from 'next/image'
import chall from '@/../public/chall.gif'
const page = () => {
  return (
    <>
    <Image src={chall} className='absolute h-screen w-screen -z-20'/>
      <div className="transparent pb-2 pt-2 z-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className=" flex items-center justify-between gap-8 sm:mb-4 md:mb-6">
            <div className="flex items-center gap-12">
              <div className=''>
              <a href='/Path/Ark%20Adrian'>
              <button className='bg-gray-200 py-3 px-3 rounded-lg text-slate-800'>&lt; Back</button>
              </a>
              <h1 className="text-2xl font-bold text-gray-100 lg:text-5xl ml-20 bg-slate-800">Challenges</h1>
              </div> 
            </div>
          </div>
        </div>
        <Chall />
      </div>


    </>
  )
}

export default page