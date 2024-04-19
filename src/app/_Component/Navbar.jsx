import React from 'react'
import logo from '@/Images/image.png'
import Image from 'next/image'
const Navbar = () => {
    return (
        <>      <header>
            <div className="navbar bg-base-100 border-x-20 border-teal-400">
                <div className="flex-1">
                    <Image className='ml-4' src={logo} height={50} width={50} />
                </div>
                <div className='flex-1'>
                    <a className="flex order-first lg:order-none title-font font-medium items-centerlg:items-center lg:justify-center mb-4 md:mb-0">
                    </a>
                </div>

                <div className="flex-none gap-1">
                    <div className="form-control">
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-10">
                            <div className="w-10 rounded-full bg-gray-400 text-slate-900">
                               <h1 className='text-center text-3xl mt-1'>S</h1>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mr-3">
                            <li>
                                <a href='/Profile/Subham' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header></>
    )
}

export default Navbar