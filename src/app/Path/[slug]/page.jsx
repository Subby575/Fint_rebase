
"use client"
import React from 'react'
import '@/app/_Component/CSS/start.css'
import { usePathname } from 'next/navigation'

import mutu from '@/Charac/mutu.jpg'
import fixed from '@/Charac/fixed.jpg'
import liqu from '@/Charac/liqu.jpg'
import savings from '@/Charac/savings.jpg'
import intro from '@/Charac/intro.jpg'
import challenge from '@/Charac/challenge.jpg'
import stocks from '@/Charac/stocks.jpg'



import mutushadow from '@/Charac/mutushadow.png'
import fixedshad from '@/Charac/fixedshad.png'
import liqushad from '@/Charac/liqushad.png'
import savingsshad from '@/Charac/savingdshad.png'
import stockshad from '@/Charac/stockshad.png'
import introshad from '@/Charac/introshad.png'
import challengeshad from '@/Charac/challengeshad.png'




import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../_Component/Navbar'
const Page = () => {
  const path=usePathname();
  const pa=path.slice(6,20);
  // const u=pa.slice(0,1);
  var str=pa.replace("%20"," ");
  // console.log(pa)
  // console.log(data)
  return (
    <>
      <Navbar params={str} />


      <div className="bg-white  py-4">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h1 className='p-5 rounded-lg text-2xl bg-teal-600 text-gray-100'>1</h1>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Intro to Finance Management </h2>

              <p className="hidden max-w-screen-sm text-gray-500 md:block">Discover essential finance concepts. From budgeting to investing, equip yourself with the knowledge and tools to navigate the complexities of financial management.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex intro align-center justify-center'>
        <Link href="/Learn/intr1" alt="Mythrill">
          <div className="card">
            <div className="wrapper">
              <Image src={intro} className="cover-image" />
            </div>
            <h1 className='title mt-32 ml-5 '><span className='text-xl text-gray-900 bg-gradient-to-r from-amber-200 to-yellow-500 px-6 rounded-lg '>Introduction</span></h1>
            <Image src={introshad} className="character mt-20" />
          </div>
        </Link>
      </div>

      <div className="bg-white pb-12 pt-16 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h1 className='p-5 rounded-lg text-2xl bg-slate-800 text-gray-100'>2</h1>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Learning Modules</h2>

              <p className="hidden max-w-screen-sm text-gray-500 md:block">Unlock the secrets of finance with engaging lessons on stocks, mutual funds, budgeting, and more in our interactive learning module.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LEARNING NODULES */}

      <div className='flex learning'>
        <div className='sm:flex sm:py-10'>
          <div>
          <Link href="/Learn/mutu1" alt="Mythrill">
            <div className="card">
              <div className="wrapper">
                <Image src={mutu} className="cover-image" />
              </div>
              <h1 className='title mt-32 ml-3 '><span className='text-xl text-gray-900 bg-emerald-200 px-6 rounded-lg '>MutualFunds</span></h1>
              <Image src={mutushadow} className="character" />
            </div>
          </Link>
          </div>


          <div>
          <Link href="/Learn/insu1" alt="Mythrill">
            <div className="card">
              <div className="wrapper">
                <Image src={savings} className="cover-image" />
              </div>
              <h1 className='title mt-32 ml-16'><span className='text-xl bg-gradient-to-r from-slate-500 to-slate-800 text-gray-100  px-3 rounded-lg -mr-4'>Insurance</span></h1>
              <Image src={savingsshad} className="character" />
            </div>
          </Link>
          </div>

          <div>
          <Link href="/Learn/real1" alt="Mythrill">
            <div className="card">
              <div className="wrapper">
                <Image src={fixed} className="cover-image" />
              </div>
              <h1 className='title mt-32 ml-4 '><span className='text-xl text-gray-900 bg-gradient-to-r from-amber-200 to-yellow-500 px-6 rounded-lg '>RealEstate</span></h1>
              <Image src={fixedshad} className="character" />
            </div>
          </Link>
          </div>

          <div>
          <Link href="/Learn/fide1" alt="Mythrill">
            <div className="card">
              <div className="wrapper">
                <Image src={liqu} className="cover-image" />
              </div>
              <h1 className='title mt-32  ml-6'><span className='text-xl bg-gradient-to-r from-slate-900 to-slate-700 text-white  px-3 rounded-lg -mr-4'>FixedDeposit</span></h1>
              <Image src={liqushad} className="character" />
            </div>
          </Link>
          </div>


          <div>
          <Link href="/Learn/stma1" alt="Mythrill">
            <div className="card">
              <div className="wrapper">
                <Image src={stocks} className="cover-image" />
              </div>
              <h1 className='title mt-32  ml-6'><span className='text-xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-gray-900  px-3 rounded-lg -mr-4'>StockMarket</span></h1>
              <Image src={stockshad} className="character" />
            </div>
          </Link>
          </div>

        </div>
      </div>


      {/* CHALLENGE SECTION */}
      <div className="bg-white pb-12 pt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h1 className='p-5 rounded-lg text-2xl bg-red-950 text-gray-100'>3</h1>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Challenges </h2>

              <p className="hidden max-w-screen-sm text-gray-500 md:block">Conquer financial challenges head-on, from market volatility to budgeting dilemmas, and emerge with valuable skills and insights.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex chal align-center justify-center'>
        <Link href="/Challenge" alt="Mythrill">
          <div className="card">
            <div className="wrapper">
              <Image src={challenge} className="cover-image" />
            </div>
            <h1 className='title mt-32 ml-5 '><span className='text-xl text-gray-100 bg-gradient-to-r from-red-500 to-orange-500 px-6 rounded-lg '>Challenge</span></h1>
            <Image src={challengeshad} className="character" />
          </div>
        </Link>
      </div>

    </>
  )
}

export default Page