"use client"
// import Steps from '@/app/_Component/Steps';
// import Image from 'next/image'
import teach from '../../Mascot/teach.png'
import logo from '../../../Images/image.png'
import React from 'react'
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
// import stocks from './../../../public/stocks.jpg'
import stocks from '@/../public/stocks.jpg'
import Modal from '@/app/_Component/Finish';
import Link from 'next/navigation'
const page = () => {
  const path = usePathname();
  const p = path.slice(7, 13);
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
  //console.log("now"+p)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
      <div className='bg-teal-00 border-3 border-teal-200'>
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

        <div className="
      h-screen rounded-lg bg-emerald-200 border border-teal-800  mx-16">


          {/* <Image className='absolute mt-16 -ml-16' src={teach} width={500} height={500} /> */}
          <div className="mx-auto  max-w-screen-2xl  ">
            <section className="flex flex-col items-center ">
              <section class="  text-gray-600 body-font mx-12">
                
              <div className='mt-12 text-xl ml-12'>
                <a href='/'>Study
                </a>
                <span> &gt; </span>
                <a href='/Learn/mufu2'>Mutual Funds
                </a>
                <span> &gt; </span>
                <button ><span className='text-2xl text-gray-500'>Intro to Mutual funds</span>
                </button>
              </div>
                <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                  </div>
                  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                      <br class="hidden lg:inline-block" />
                    </h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla voluptate dolorem repellat maxime. Ab cum officiis in quia inventore ex error mollitia. Facere tempore possimus impedit eius architecto vero ut eveniet ad nihil dolorum quasi eligendi, delectus voluptatum modi perspiciatis voluptatem excepturi et quibusdam consequatur suscipit temporibus! Enim quo assumenda aliquid nihil accusantium impedit deserunt.</p>
                    <div class="flex justify-center">
                      {/* <button class="inline-flex mt-36 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Open Excel</button> */}
                      <Box className='w-96 rounded-sm mt-16 -mr-3' component="section" sx={{ maxWidth: 800, flexGrow: 1 }}>
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
                        {activeStep === maxSteps - 1 ? <Modal params={p} /> : "Next"}
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

                    </div>
                  </div>
                </div>
              </section>
              <div className=" flex max-w-xl flex-col items-center text-center ">
                {/* <Steps step={arr} params={p}/> */}
                

              </div>

            </section>
          </div>

        </div>
      </div>
    </>
  )
}

export default page