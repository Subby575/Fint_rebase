"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import main from '@/../public/main.jpg'
import '@/app/_Component/CSS/main.css'
import conf from '@/Images/conf.png'
import arrow from '@/Images/arrow.png'
import logo from '@/Images/image.png'
export const Main = () => {
  return (
    <>
<section  className="bg-slate-800 dark:bg-gray-900 h-screen">
  <Link href="/">
  <Image alt=" " src={logo} className="pl-8 pt-8" width={100}/>
  </Link>
  
    <div  className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:pt-32 lg:grid-cols-12 align-middle pt-56">
        <div  className="mr-auto place-self-center lg:col-span-7">
            <h1  className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Chart Your Financial Future, Today's Decisions.</h1>
            <p  className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Embark on a financial odyssey. Navigate our futuristic platform where decisions shape destiny. From sleek skyscrapers to neon futurescapes, chart your course to prosperity with expert guidance. Your journey starts now! </p>
         
            <a href="/Register"  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Get Started
                <svg  className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
        </div>
        <div  className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image src={main} alt="mockup"/>
        </div>               
    </div>
</section>
<div className="text-center justify-center py-9 flex  text-gray-100">
  
<div className="justify-center align-middle ml-">
  <Image className="rounded-lg -rotate-90 w-16" src={arrow} width={500} />
  <Image className="rounded-lg" src={conf}/>
  </div>
  <h1 className="mt-24 text-xl ml-2 w-96">Why are you going down when the real fun&apos;s joining us? Start your upgrade journey now and elevate your groove! <span className="text-xl ">🤑</span></h1>
  
</div>
</>
  );
};