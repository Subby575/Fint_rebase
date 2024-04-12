import React from 'react'
import '../_Component/CSS/start.css'
import logo from '@/Images/image.png'

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
const page = () => {
    return (
        <>
           <header>
        <div className="navbar bg-base-100 border-x-20 border-teal-400">
          <div className="flex-1">
            <Image className='ml-4' src={logo} height={50} width={50} />
          </div>
          <div className='flex-1'>
            <a class="flex order-first lg:order-none title-font font-medium items-centerlg:items-center lg:justify-center mb-4 md:mb-0">
            </a>
            </div>

          <div className="flex-none gap-1">
            <div className="form-control">
              {/* <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Level 1<span className='ml-20'><b> 80 xp</b></span></div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 " style={{ width: `80%` }} ></div>
  </div>*/}
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="bg-white ">
  {/* <!-- banner - start --> */}
  <div class="mx-auto max-w-screen-2xl px-4  md:px-8">
    <div class="relative flex flex-wrap rounded-lg bg-indigo-500 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
        <button className='text-black bg-gray-300 px-3 py-2 rounded-lg'>
            &lt;back
        </button>
      <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a section of some simple filler text, also known as placeholder text.</div>

      <a href="#" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn more</a>

      {/* <!-- close button - start --> */}
      <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
        <button type="button" class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* <!-- close button - end --> */}
    </div>
  </div>
  {/* <!-- banner - end --> */}
</div>

            <div class="bg-white  py-4">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        <div class="flex items-center gap-12">
            <h1 className='p-5 rounded-lg text-2xl bg-teal-600 text-gray-100'>1</h1>
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Intro to Finance Management </h2>
  
          <p class="hidden max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
        </div>
        </div>
        </div>
        <div className='flex intro align-center justify-center'>
        <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={intro} class="cover-image" />
                    </div>
                    <h1 className='title mt-32 ml-5 '><span className='text-xl text-gray-900 bg-gradient-to-r from-amber-200 to-yellow-500 px-6 rounded-lg '>Introduction</span></h1>
                    <Image src={introshad} class="character" />
                </div>
            </Link>
                </div>

            <div class="bg-white pb-12 pt-16">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        <div class="flex items-center gap-12">
        <h1 className='p-5 rounded-lg text-2xl bg-slate-800 text-gray-100'>2</h1>
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Learning Modules</h2>
  
          <p class="hidden max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
        </div>
        </div>
        </div>
        <div className='flex learning'>
        

       


            <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={mutu} class="cover-image" />
                    </div>
                    <h1 className='title mt-32 ml-3 '><span className='text-xl text-gray-900 bg-emerald-200 px-6 rounded-lg '>MutualFunds</span></h1>
                    <Image src={mutushadow} class="character" />
                </div>
            </Link>



            <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={savings} class="cover-image" />
                    </div>
                    <h1 className='title mt-32 ml-16'><span className='text-xl bg-gradient-to-r from-slate-500 to-slate-800 text-gray-100  px-3 rounded-lg -mr-4'>Savings</span></h1>
                    <Image src={savingsshad} class="character" />
                </div>
            </Link>

            <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={fixed} class="cover-image" />
                    </div>
                    <h1 className='title mt-32 ml-4 '><span className='text-xl text-gray-900 bg-gradient-to-r from-amber-200 to-yellow-500 px-6 rounded-lg '>LiquidFunds</span></h1>
                    <Image src={fixedshad} class="character" />
                </div>
            </Link>

            <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={liqu} class="cover-image" />
                    </div>
                    <h1 className='title mt-32  ml-6'><span className='text-xl bg-gradient-to-r from-slate-900 to-slate-700 text-white  px-3 rounded-lg -mr-4'>FixedDeposit</span></h1>
                    <Image src={liqushad} class="character" />
                </div>
            </Link>

            <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={stocks} class="cover-image" />
                    </div>
                    <h1 className='title mt-32  ml-6'><span className='text-xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-gray-900  px-3 rounded-lg -mr-4'>StockMarket</span></h1>
                    <Image src={stockshad} class="character" />
                </div>
            </Link>

            </div>
            <div class="bg-white pb-12 pt-16">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        <div class="flex items-center gap-12">
        <h1 className='p-5 rounded-lg text-2xl bg-red-950 text-gray-100'>3</h1>
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Challenges </h2>
  
          <p class="hidden max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
        </div>
        </div>
        </div>
        <div className='flex chal align-center justify-center'>
        <Link href="/Learn/mutu1" alt="Mythrill">
                <div class="card">
                    <div class="wrapper">
                        <Image src={challenge} class="cover-image" />
                    </div>
                    <h1 className='title mt-32 ml-5 '><span className='text-xl text-gray-100 bg-gradient-to-r from-red-500 to-orange-500 px-6 rounded-lg '>Challenge</span></h1>
                    <Image src={challengeshad} class="character" />
                </div>
            </Link>
                </div>

        </>
    )
}

export default page