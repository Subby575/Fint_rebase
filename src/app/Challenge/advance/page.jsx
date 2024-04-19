import Comic from '@/app/_Component/Question/Comic'
import React from 'react'

const page = () => {
  return (
<>
{/* <Ques/> */}
<div  className="bg-white py-6 sm:py-8 lg:py-12">
  <div  className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div  className="mb-10 md:mb-16">
      <h2  className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Charlie's First Car</h2>

      <p  className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    {/* <div  className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> */}
<Comic/>
    
    {/* </div> */}
  </div>
</div>

</>
  )
}

export default page