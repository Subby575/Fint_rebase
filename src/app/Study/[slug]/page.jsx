"use client"
import React from 'react'
import logo from '../../../Images/image.png'
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import bg from '@/Images/gam.jpg'
import { useState } from 'react';

// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
// import stocks from './../../../public/stocks.jpg'
import Modal from '@/app/_Component/Finish';
import { materials } from '@/Materials.js';
const Page = () => {
  const path = usePathname();
  var p = path.slice(11, 13);
  const k = path.slice(7, 11);
  // console.log("parchi" + p);
  // console.log("kkk" + k);
  const arr = [
    {
      label: 'Select campaign settings form your phone',
      description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum labore delectus aspernatur nisi ratione tempora perferendis voluptas, assumenda placeat at excepturi nulla voluptatum inventore cupiditate odit ducimus magni. Tempore fuga accusantium aut libero suscipit. ',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
    },
  ];
  var i=0;
  // console.log("now" + p)
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = arr.length;
  //console.log("yy" + params);

  const handleNext = () => {
    console.log(activeStep);
    if (activeStep != maxSteps - 1) {

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Image className='absolute -z-10 h-screen w-screen' src={bg}/>


      <div className=''>

        <div className="navbar bg-base-100 px-2">
          <div className="flex-1">
            <Image className='ml-4' src={logo} height={50} width={50} />
          </div>

          <div className="form-control">

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



        {/* <Image className='absolute mt-16 -ml-16' src={teach} width={500} height={500} /> */}
        <div className='h-screen justify-center items-center ml-80 align-middle '>
          {
            materials.map((e) => (
              e.title == k ?
              i==0?
              <>
                  <div  className="relative flex flex-col mt-20 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-3/4 h-96 ">
                    <div  className="p-6">
                      
                      <h5  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       {activeStep+1}/{maxSteps}
                      </h5>
                      <p  className="block font-sans antialiased font-light text-2xl leading-relaxed text-inherit">
                        {
                          activeStep==1?
                          e.page1
                          :
                          activeStep==2?
                          e.page2:
                          e.page3
                        }
                     
                      </p>
                    </div>
                    <div  className="p-6 pt-0">
                    </div>
                  </div>

                  <Box className='w-96 rounded-sm align-middle ml-60 mb-12 -mr-3' component="section" sx={{ maxWidth: 800, flexGrow: 1 }}>
                    <MobileStepper
                      className='bg-gradient-to-r from-slate-900 to-slate-700 text-gray-200 '
                      variant="text"
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      nextButton={
                        <Button
                          size="small"
                          className='text-teal-200'
                          onClick={handleNext}

                        >
                          {activeStep === maxSteps - 1 ? <Modal params={e.mod} pro={p} /> : "Next"}
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                          ) :
                            activeStep === maxSteps - 1 ?
                              " "
                              :
                              (
                                <KeyboardArrowRight />
                              )}
                        </Button>
                      }

                      backButton={
                        <Button size="small"
                          className='text-red-100 '
                          onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }

                    />
                  </Box>
                </>
                :
               " "
                :
                " "

            ))
        
          }
        </div>

      </div>
    </>
  )
}

export default Page