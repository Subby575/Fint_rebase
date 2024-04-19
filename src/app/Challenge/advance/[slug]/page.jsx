"use client"
import React from 'react'
import '@/app/_Component/CSS/lbl.css'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
const page = () => {
  return (
    <>
 
      {/* <h1>Problem</h1> */}
      <div><p>&gt; <span>DESIRE</span>: "<i>He wants to buy a Bike</i>"</p>
        <p>&gt; <span>FINANCIAL CONDITION</span>: "<i>Access Denied. You Do Not Have The Permission To Access This Page On This Server</i>"</p>
        <p>&gt; <span>PROBLEM</span>: [<b><TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'execute access forbidden, read access forbidden, write access forbidden, ssl required, ssl 128 required, ip address rejected, client certificate required, site access denied, too many users, invalid configuration, password change, mapper denied access, client certificate revoked, directory listing denied, client access licenses exceeded, client certificate is untrusted or invalid, client certificate has expired or is not yet valid, passport logon failed, source access denied, infinite depth is denied, too many requests from the same client ip',
            3000,

          ]}
          speed={50}
          style={{ fontSize: '1em', color: "white" }}
          repeat={1}
        /></b>...]</p>
        <p>&gt; <span>OBJECTIVE</span>:<i>You have to help him Buy</i> 
        
        {/* [<a href="/">Home Page</a>, <a href="/">About Us</a>, <a href="/">Contact Us</a>, <a href="/">Blog</a>...] */}
        </p>
        
        <p>&gt; <span>HAVE A NICE DAY SIR AXLEROD :-</span></p>
        <a  className='bg-gray-200 text-black px-3 py-2 rounded-md mb-10 z-20' href='/Challenge/advance
    '>Continue</a>
      </div>


    </>
  )
}

export default page