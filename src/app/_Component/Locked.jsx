import React from 'react'

const Locked = () => {
    return (
        <div  className="mt-3 py-12 bg-black ">
            <div >
                    <div  className="mx-auto flex max-w-xl flex-col items-center text-center">
                        <button  className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-red-400 focus-visible:ring  md:text-base">Locked🔒</button>

                        <p className='text-red-100 pt-3' href=''>Unlocks after Completion Of Modules</p>
                    </div>
                </div>
                <div className='blur-sm'>
                 
                </div>
                <div  className="mx-auto max-w-screen-2xl px-4 md:px-8">
            </div>
        </div>
    )
}

export default Locked