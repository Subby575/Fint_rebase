import React from "react";
import Login from "../_Component/Login";

const page = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-green-300 to-teal-800">
        <Login />
      
      <div className="bg-gradient-to-r from-green-300 to-teal-800 pb-6 sm:pb-8 lg:pb-12">
        {/* <!-- banner - start --> */}
        <div className="relative flex flex-wrap bg-gradient-to-r from-emerald-500 to-emerald-900 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
          <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
            This is a section of some simple filler text, also known as
            placeholder text.
          </div>

          <a
            href="#"
            className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold text-gray-600 outline-none ring-indigo-300 transition duration-100 hover:bg-emerald-600 focus-visible:ring 
    hover: active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
          >
            Learn more
          </a>

          {/* <!-- close button - start --> */}
          <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3"></div>
          {/* <!-- close button - end --> */}
        </div>
        {/* <!-- banner - end --> */}
      </div>
      </div>
    </>
  );
};

export default page;
