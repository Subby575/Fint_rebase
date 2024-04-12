import React from 'react'
import Login from './Login'
import Image from 'next/image';
import Img from '../../Images/main.jpg'
import logo from '../../Images/image.png'
const Hero = () => {
    const items=["Home","Features","Pricing","About"];
  return (
   <>
   <div class="bg-gradient-to-r from-green-300 to-teal-800 pb-3 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="mb-8 flex items-center justify-evenly py-4 md:py-4  md:px-4 xl:mb-4 sticky z-999 top-0 bg-gradient-to-r from-green-300 to-teal-800 shadow rounded-sm">
      {/* <!-- logo - start --> */}
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-slate-200 md:text-3xl" aria-label="logo">
        <Image src={logo} height={50} width={80}/>
      </a>
      {/* <!-- logo - end -->

      <!-- nav - start --> */}
      <nav class="hidden gap-12 lg:flex">
       {
        items.map((e)=>(
            <a href="#" class="text-lg font-semibold text-gray-200 transition duration-100 hover:text-teal-800 active:text-indigo-700">{e}</a>
        ))
       }
      
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      {/* <!-- buttons - end --> */}
    </header>

    <section class="flex flex-col justify-between gap-2 sm:gap-10 md:gap-16 lg:flex-row">
      {/* <!-- content - start --> */}
      <div class="flex flex-col justify-center sm:text-center lg:text-left xl:w-5/12 ml-12">
      <Login/>
      </div>
      {/* <!-- content - end -->

      <!-- image - start --> */}
      <div class="h-32 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <Image src={Img} height={100} width={500} alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}
    </section>
  </div>
</div>
   </>
  )
}

export default Hero