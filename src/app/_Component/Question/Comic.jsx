"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import './Comic.css'
import Link from 'next/link'
import c1 from '@/Basic/c1.png'
import c2 from '@/Basic/c2.png'
import c3 from '@/Basic/c3.png'
import c4 from '@/Basic/c4.png'
import c5 from '@/Basic/c5.png'
import c6 from '@/Basic/c6.png'
import c7 from '@/Basic/c7.png'
import c8 from '@/Basic/c8.png'
import c9 from '@/Basic/c9.png'
import c10 from '@/Basic/c10.png'
import c11 from '@/Basic/c11.png'
import c12 from '@/Basic/c12.png'
import c13 from '@/Basic/c13.png'
import c14 from '@/Basic/c14.png'
import c15 from '@/Basic/c15.png'
import c16 from '@/Basic/c16.png'
import c17 from '@/Basic/c17.png'
import c18 from '@/Basic/c18.png'
import c19 from '@/Basic/c19.png'

import Image from 'next/image'
const Comic = () => {
  const path=usePathname();
  const pa=path.slice(16,18);
  console.log(pa);
  const k=pa;
  const arr=["c7.png"]
  return (
    <>
    
    <article  className="comic">
  <div  className="panel hover:scale-110">

    {/* <Link href='/Scene/1'> */}
    <div className='object-fill z-20 '>
      <Image className='' src={c1}/>
    </div>
    <p  className="text top-left">Start...</p>
    <p  className="text bottom-right">...Dreaming Big</p>
    {/* </Link> */}
  </div>
  <div  className="panel hover:scale-110">
  <div className=' pl-10 object-fill z-20 '>
      <Image className='' src={c2} alt=''/>
    </div>
    <p  className="text top-left">Financial reality check</p>
  </div>
  <div  className="panel hover:scale-110">
  <div className=' obejct-fill z-20 '>
      <Image className='' src={c3} alt='' />
    </div>
    <p  className="speech">A speech bubble</p>
  </div>
  <div  className="panel">
  <div className=' obejct-fill z-20 '>
      <Image className='' src={c4}/>
    </div>
  </div>
  <div  className="panel">
  <div className='obejct-fill z-20 '>
      <Image className='' src={c5}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c6}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c7}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c8}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c9}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c19}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c11}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c12}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c13}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c14}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c15}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c16}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c17}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='' src={c18}/>
    </div>
  </div>
  <div  className="panel">
  <div className=' z-20 '>
      <Image className='object-cover' src={c10}/>
    </div>
    <p  className="text bottom-right">THE END</p>
  </div>
</article>
    </>
  )
}

export default Comic