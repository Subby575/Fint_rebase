import React from 'react'
import img from './../../Images/mutual.jpg'
import logo from './../../Images/image.png'
import Image from 'next/image'
import List from './StackedList'
import StackedList from './StackedList'
import Divider from '@mui/material/Divider';
import Chal from './Chal'
import Locked from './Locked'
import './Fixed/fix.css'
const Modules = ({ params }) => {
  var k = params.slice(4, 5);
  Number(k);
  k--;
  const y = params;
  var t = 5;
  const per = (k / t) * 100;
  const a=[0,1,2];
  return (
    <>

      <header>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Image className='ml-4' src={logo} height={50} width={50} />
          </div>
          <div className='flex-1'>
            <a class="flex order-first lg:order-none title-font font-medium items-centerlg:items-center lg:justify-center mb-4 md:mb-0">
              <span class=" mt-2 text-emerald-100 text-xl">Mutual funds: Lorem, ipsum dolor.</span>
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
      <div class="flex-container">
        <aside className='object-center'>

          {/* <Image className='object-fill pt-0 h-screen p-3' src={img}/> */}
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
        <div class="  mt-3 pt-3">
          <div class="max-w-screen-2xl ">
            {/* <!-- text - start --> */}
            <div class=" ">
              <h2 class=" text-center text-2xl font-bold text-gray-200  lg:text-3xl">Quiz</h2>
            </div>
          </div>
          <div className='mt-3 mb-3'>

            <Divider className='bg-white text-white ' />
          </div>
        </div>
        {
          per < 79
            ?
            <>
              <div>

                <Locked />

              </div>
            </>
            :
            <>
            <div>
                 <div class="grid grid-cols-3 gap-8 md:grid-cols-3 my-12 md:gap-0 md:divide-x">
      {/* <!-- stat - start --> */}
     
        {
          a.map((e)=>(
            <>
            <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-teal-500 sm:text-2xl md:text-3xl">
          <a href='/Quiz'>Quiz {e+1}</a></div>
        <div class="text-sm font-semibold sm:text-base">Score : 70 %</div>
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