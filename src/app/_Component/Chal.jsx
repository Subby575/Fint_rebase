import React from 'react'
import ch1 from './../../Images/ch1.jpg' 
import ch2 from './../../Images/ch2.jpg' 
import ch3 from './../../Images/ch3.png' 
import Image from 'next/image'
const Chal = () => {
  return (
    <div  className=" pb-4 ">
  <div  className="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div  className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* <!-- image - start --> */}
      <a href="#"  className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <Image src={ch1} loading="lazy" alt="Photo by Minh Pham"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span  className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing...</span>
        <span  className="relative mr-3 mb-3 inline-block rounded-lg border border-emerald-500 px-2 py-1 text-xs text-teal-200 backdrop-blur md:px-3 md:text-sm">80%</span>
      </a>
      {/* <!-- image - end --> */}

      {/* <!-- image - start --> */}
      <a href="#"  className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
      <Image src={ch3} loading="lazy" alt="Photo by Minh Pham"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span  className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Retro</span>
      </a>
      {/* <!-- image - end --> */}

      {/* <!-- image - start --> */}
      <a href="#"  className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
      <Image src={ch2} loading="lazy" alt="Photo by Minh Pham"  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span  className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Tech</span>
      </a>
      {/* <!-- image - end --> */}
    </div>
  </div>
</div>
  )
}

export default Chal