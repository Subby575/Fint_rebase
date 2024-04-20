import React from 'react'

function Login() {
  return (
    <div  className=" py-6 sm:py-8 lg:py-12">
  <div  className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2  className=" text-center text-2xl font-bold text-teal-800 md:mb-8 lg:text-3xl">Start Manging your Finance<br></br> Smartly</h2>

    <form  className="mx-auto max-w-lg ">
      <div  className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label for="email"  className="mb-2 inline-block text-sm text-teal-800 sm:text-base">Email</label>
          <input name="email"  className="w-full rounded border bg-gradient-to-r from-teal-100 to-green-100 px-3 py-2 text-gray-900 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div>
          <label for="password"  className="mb-2 inline-block text-sm text-teal-800 sm:text-base">Password</label>
          <input name="password"  className="w-full rounded border bg-gradient-to-r from-teal-100 to-green-100 px-3 py-2 text-gray-600 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <button  className="block rounded-lg bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-teal-200 hover:text-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

      </div>

      <div  className="flex items-center justify-center ">
        <p  className="text-center text-sm text-white">Don&apos;t have an account? <a href="/Register"  className="text-gray-200 transition duration-100 hover:text-teal-200 active:text-indigo-700">Register</a></p>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login