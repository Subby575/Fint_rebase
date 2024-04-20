import React from 'react'



import mutu from '@/Charac/mutu.jpg'
import intro from '@/Charac/intro.jpg'
import liqu from '@/Charac/liqu.jpg'
import stocks from '@/Charac/stocks.jpg'
import savings from '@/Charac/savings.jpg'
import fixed from '@/Charac/fixed.jpg'



import Image from 'next/image'

import StackedList from './StackedList'
import Divider from '@mui/material/Divider';
import Locked from './Locked'
import './CSS/fix.css'
const Modules = ({ params }) => {
  var k = params.slice(4, 5);
  const q=params.slice(0,4);
  Number(k);
  k--;
  // console.log("hello"+q);
  const y = params;
  var t = 5;
  const per = (k / t) * 100;
  const a=[0,1,2];
  return (
    <>

      <a className='bg-gray-200 px-3 py-2 rounded-lg text-black' href='/Path/Ark%20Adrian'><button>&lt;Back</button></a>
      <div  className="flex-container">
        <aside className='object-center'>
          {
            q=="mutu"
            ?
            <Image className='object-fill pt-0 h-screen p-3' src={mutu}/>
            :
            q=="intr"
            ?
            <Image className='object-fill pt-0 h-screen p-3' src={intro}/>
            :
            q=="stma"
            ?
            <Image className='object-fill pt-0 h-screen p-3' src={stocks}/>
            :
            q=="fide"
            ?
            <Image className='object-fill pt-0 h-screen p-3' src={liqu}/>
            :
            q=="insu"
            ?
            <Image className='object-fill pt-0 h-screen p-3' src={savings}/>
            :
            <Image className='object-fill pt-0 h-screen p-3' src={fixed}/>
          }
          
        </aside>
        <main>
          {/* <StackedList /> */}
          <div className='px-4 sticky'>
            <div className="mb-1  text-base font-medium text-green-700  dark:text-green-500">Progress <span className='ml-72'><b> {per}%</b></span></div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              {
                per > 80
                  ?
                  <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 " style={{ width: `${per}%` }} ></div>
                  :
                  per > 40
                    ?
                    <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 " style={{ width: `${per}%` }} ></div>
                    :
                    <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 " style={{ width: `${per}%` }} ></div>

              }

            </div>
          </div>
          <StackedList params={y} />

        </main>
      </div>
      <div>

        {/* <Divider/> */}
        <div  className="  mt-3 pt-3">
          <div  className="max-w-screen-2xl ">
            {/* <!-- text - start --> */}
            <div  className=" ">
              <h2  className=" text-center text-2xl font-bold text-gray-200  lg:text-3xl">Quiz</h2>
            </div>
          </div>
          <div className='mt-3 mb-3'>

            <Divider className='bg-white text-white ' />
          </div>
        </div>
        {
          per < 81
            ?
            <>
              <div>

                <Locked />

              </div>
            </>
            :
            <>
            <div>
                 <div  className="grid grid-cols-3 gap-8 md:grid-cols-3 my-12 md:gap-0 md:divide-x">
      {/* <!-- stat - start --> */}
     
        {
          a.map((e)=>(
            <>
            <div  className="flex flex-col items-center md:p-4">
        <div  className="text-xl font-bold text-teal-500 sm:text-2xl md:text-3xl">
          Quiz {e+1}</div>
        {/* <div  className="text-sm font-semibold sm:text-base py-2">Score : 70 %</div> */}
        <a href={`/Quiz/${q}${e+1}`}> <button className='bg-green-300 py-1 px-3 text-slate-800 my-2 rounded-lg  hover:scale-110'>Start</button></a>
        </div>
          </>
          ))
}
    </div>

            <Divider className='bg-white text-white ' />
            </div>
        </>
        }
      </div>
    </>
  )
}

export default Modules