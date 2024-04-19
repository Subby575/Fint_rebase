import React from 'react'
import './Chall.css'
import Link from 'next/link'
import Image from 'next/image'
import coming from "@/Images/coming.png"
const Chall = () => {
  return (
    <>
     <div className='absolute mt-96 w-full h-56 bg-gray-800'></div>
    <div  className="container">
  <div  className="card card0">
    <Link href='/Challenge/basic'>
    <div  className="border">
      <h2 className='bg-emerald-200 w-16 pl-2 text-slate-700 rounded-lg'>Basic</h2>
      <div  className="icons">
      <div className='para w-full'>
        <p className='mb-96 bg-gradient-to-r from-slate-300 to-slate-500 text-gray-600 rounded-lg  px-3 w-72 h-1/2 pt-16 text-4xl '>Vishal's<br></br> Royal Enfield</p>

       </div>
      </div>
    </div>
    </Link>
  </div>
  <div  className="card card1">
  {/* <Link href='/Challenge/med '> */}
    <div  className="border">
    <h2 className='bg-amber-200 w-20 pl-2 text-slate-700 rounded-lg'>Medium</h2>
    <div  className="icons">
       <div className='para w-full'>
        <p className='mb-96 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-800 rounded-lg  px-3 w-72  '><Image src={coming}/></p>

       </div>
      </div>
    </div>
    {/* </Link> */}
  </div>
  <div  className="card card2">
  {/* <Link href='/Challenge/advance'> */}
    <div  className="border">
    <h2 className='bg-red-600 w-24 pl-2 text-slate-200 rounded-lg'>Advanced</h2>
      <div  className="icons">
      <div className='para w-full'>
        <p className='mb-96 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-800 rounded-lg  px-3 w-72  '><Image src={coming}/></p>

       </div>
      </div>
    </div>
  {/* </Link> */}
  </div>
</div>
 
    </>
  )
}

export default Chall