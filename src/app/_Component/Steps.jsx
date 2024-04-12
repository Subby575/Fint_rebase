import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import stocks from './../../../public/stocks.jpg'

import Modal from './Finish';
export default function Steps({ step, params }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = step.length;
  console.log("yy" + params);

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
      <Box className='w-screen rounded-sm mt-12' component="section" sx={{ maxWidth: 800, flexGrow: 1 }}>
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
              {activeStep === maxSteps - 1 ? <Modal params={params} /> : "Next"}
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) :
              activeStep === maxSteps - 1?
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

        <Box className="block " sx={{ height: 255, maxWidth: 800, width: '100%', p: 2 }}>
          <Paper
            className='text-left'
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 150,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            {step[activeStep].description}
            {/* <Typography>{step[activeStep].label}</Typography> */}
          </Paper>
          <Paper>

            <Box className='py-4 my-4' component="section" sx={{ border: '1px dashed grey' }}>
              <Image className='mx-28' height={100} width={400} src={stocks} />
            </Box>


          </Paper>
              <button className='inline-block bg-gradient-to-r from-emerald-200 to-cyan-800 text-gray-100 w-full mt-1 
              py-2'>Excel.xlsx</button>

        </Box>
      </Box>


        {/* <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Progress <span className='ml-72'><b> 80%</b></span></div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 " style={{ width: `80%` }} ></div>
        </div> */}
    </>
  );
}
