import React from 'react'
import Divider from '@mui/material/Divider';
import mutu from './../../Images/mutual.jpg'
import Image from 'next/image'
const StackedList = ({params}) => {
  console.log("yooooo"+params);
  const t=params.slice(4,6);
  const a=[1,2,3,4,5];
  return (
    <>
  {
        a.map((e)=>(
          <>

        <div className="bg-emerald-300 pt-4 px-3 pb-3">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
      <div className=''>
        <div className='flex '>
        <div className="rounded-full text-white text-xl bg-gray-900 w-6 text-center">{e}</div>
       <h1 className='text-gray-700  rounded-lg text-xl px-3'>Mutual Funds</h1>
        </div>
        <p className="text-gray-600 mr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt, quo expedita</p>
      </div>
      {
          t> e ?
          <button className='bg-emerald-400 rounded-lg px-8 py-2 text-white mb-2'>Finished </button>
          
          :
            t == e ?
            <a href={`/Study/${params}`}><button className='bg-blue-500 px-8 py-3 rounded-lg text-white mb-2'>Start</button></a>
           
            : <button className='bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-lg text-white mb-2'>Locked </button>
        }
      
    </div>
  </div>
</div>
        </>
      ))
    }
    </>
  )
}

export default StackedList