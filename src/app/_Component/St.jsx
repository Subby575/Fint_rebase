import React from 'react'

const St = ({ params, pro }) => {
    // console.log("yooo"+pro);
    return (

        <>
            {
                <div className=" pt-4 px-3 pb-3">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-4">
                            <div className=''>
                                <div className='flex '>
                                    <div className="rounded-full text-white text-xl bg-gray-900 w-6 text-center">{params.id}</div>
                                    <h1 className='text-gray-700  rounded-lg text-xl px-3'>{params.title}</h1>
                                </div>
                                <p className="text-gray-600 mr-3">{(params.imp).slice(0,80)}..</p>
                            </div>
                            {
                                params.id< pro ?
                                    <button className='bg-emerald-400 rounded-lg px-8 py-2 text-white mb-2'>Finished </button>

                                    :
                                    pro == params.id ?
                                        <a href={`/Study/${(params.title).slice(0,4)}${params.id}`}><button className='bg-blue-500 px-8 py-3 rounded-lg text-white mb-2'>Start</button></a>

                                        : <button className='bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-lg text-white mb-2'>Locked </button>
                            }

                        </div>
                    </div>
                </div>
            }

        </>

    )
}

export default St