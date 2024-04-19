import React from 'react'
import "@/app/_Component/CSS/Hey.css"

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
const Hey = () => {
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

    <div  className="movie_card" id="tomb">
    <div  className="info_section">
      <div  className="movie_header">
        <img  className="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"/>
        <h1>Tomb Raider</h1>
        <h4>2018, Roar Uthaug</h4>
        <span  className="minutes">125 min</span>
        <p  className="type">Action, Fantasy</p>
      </div>
      <div  className="movie_desc">
        <p  className="text">
          Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.
        </p>
      </div>
      {/* <div  className="movie_social"> */}
      <Box className='w-96 z-100 rounded-sm mt-96 -mr-3' component="section" sx={{ maxWidth: 800, flexGrow: 1 }}>
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
      {/* </div> */}
    </div>
    <div  className="blur_back tomb_back"></div>
  </div>
  )
}

export default Hey