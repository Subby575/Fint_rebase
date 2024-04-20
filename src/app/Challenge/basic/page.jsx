"use client"
import Comic from '@/app/_Component/Question/Comic'
import React from 'react'
import '@/app/_Component/CSS/but.css'
import { usePathname } from 'next/navigation'
const page = () => {
  const path = usePathname();
  const pa = path.slice(16, 18);
  console.log(pa);
  return (
    <>
      {/* <Ques/> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Vishal&apos;s ROYAL Enfield</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Join us in mentoring Vishal on his financial journey and help him achieve his dream of buying a Royal Enfield Classic 350. Together, let&apos;s make his dreams a reality!</p>
            <div className='justify-center ml-96'>
              <a href='/Challenge/basic/1'>
              <button className='ml-72 mt-12 bg-emerald-300 py-3 px-3 rounded-lg hover:bg-emerald-500 hover:text-white text-gray-800'>Start Now</button>
              </a>
            </div>

          </div>
          {/* <!-- text - end --> */}

          {/* <div  className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> */}
          <Comic params={pa} />

          {/* </div> */}
        </div>
      </div>

    </>
  )
}

export default page