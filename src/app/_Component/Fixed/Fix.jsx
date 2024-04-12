import React from 'react'
import './fix.css'
import Image from 'next/image'
import Stock from '@/Images/stock.jpg'
import StackedList from '../StackedList'
const Fix = () => {
  return (
   <>

    <header>
      some header content
    </header>
    <div class="flex-container">
      <aside className='object-center'>
        <Image className='' height={500} width={500} src={Stock}/>
      </aside>
      <main>
        {/* <StackedList /> */}
      </main>
    </div>
   </>
  )
}

export default Fix