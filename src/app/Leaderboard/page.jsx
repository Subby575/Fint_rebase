import React from 'react';
 // Assuming the component file is in the same directory
 import lead from '@/../public/leadbg.jpg'
 import Image from 'next/image';
import SciFi from '../_Component/Lead';
const page = () => {
 

  return (
    <div>
      <Image className='absolute h-screen w-screen bg-cover -z-10' src={lead}/>
      <SciFi />
    </div>
  );
};

export default page;
