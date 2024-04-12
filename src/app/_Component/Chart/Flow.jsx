import React from 'react'
import './flow.css'
import intro from './../../../Images/intro.jpg'
import mf from './../../../Images/mf.jpg'
import stock from './../../../Images/stock.jpg'
import lf from './../../../Images/lf.jpg'
import fd from './../../../Images/fd.jpg'
import savings from './../../../Images/savings.jpg'
import chall from './../../../Images/chal.jpg'
import Image from 'next/image'
const Flow = () => {
  return (
    // <!-- in a wrapping section include different containers for each step of the flow: data sources, build, deploy -->
    <>
    <div class=" mt-2 ml-3 rounded-sm ">
          <a href="/" class="inline-block rounded-sm bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"> 	&lt; Back</a>
        </div>
    <section class="container ">
        <div class="container__deploy bg-gradient-to-r from-amber-200 to-yellow-500">
        <Image height={100} className='relative mix-blend-multiply ml-24' width={100} src={intro}/>
          <a href='/Learn/intr1'>
        <h3>Intro To Money Management</h3>
        <p className=''>Why should you learn Money Managment?</p>
        </a>
       
      </div>

      <svg viewbox="0 0 10 100">
        <line x1="5" x2="5" y1="0" y2="100"/>
      </svg>
      {/* <!-- in the sources container show three cards, side by side, or one atop the other on smaller viewports --> */}
      <div class="container__sources ">
    
        <div class="sources--cms">
        <Image height={300} className='relative mix-blend-multiply ' width={300} src={stock}/>
          <a href='/Learn/stma1'>
          <h3>Stock Market</h3>
          <p>Contentful, Drupal, WordPress, etc.</p>
          </a>
        </div>
    
        <div class="sources--markdown">
        <Image height={300} className='relative mix-blend-multiply ' width={300} src={mf}/>
        <a href='/Learn/mufu1'>
          <h3>Mutual Funds</h3>
          <p>Documentation, Posts, etc.</p>
          </a>
        </div>
    
        <div class="sources--data">
        <Image height={200} className='relative mix-blend-multiply ' width={200} src={lf}/>
        <a href='/Learn/lifu1'>
          <h3>Liquid Fund</h3>
          <p>APIs, Databases, YAML, JSON, CSV, etc.</p>
          </a>
        </div>
        <div class="sources--data">
        <Image height={300} className='relative mix-blend-multiply ' width={300} src={fd}/>
        <a href='/Learn/less1'>
          <h3>Fixed Deposit</h3>
         <p>Lorem ipsum dolor sit amet.</p>
         </a>
        </div>
        <div class="sources--data">
        <Image height={300} className='relative mix-blend-multiply mt-5' width={300} src={savings}/>
        <a href='/Learn/savi1'>
          <h3>Savings</h3>
         <p>Lorem ipsum dolor sit amet.</p>
         </a>
        </div>
    
      </div>
    
      {/* <!-- include a simple line to divide the container, and animate it to show a connection between the different containers  --> */}
      
    
    
      {/* <!-- in the build container show two cards, atop of one another and the first of one showing an SVG icon --> */}
    
      {/* <!-- repeat the svg line to connect the second and third containers as well --> */}
    
      {/* <!-- in the deploy container show simply text, without a wrapping card --> */}
      


      <svg viewbox="0 0 10 100">
        <line x1="5" x2="5" y1="0" y2="100"/>
      </svg>
      <div class="container__build">
        <Image height={300} className='relative mix-blend-multiply ' width={300} src={chall}/>
        <a href="/Challenge">
        <h3>Challenges</h3>
        <p className=''>Solve Real Life Scenarios</p>
        </a>
      </div>
    
    </section>
    </>
  )
}

export default Flow