'use client';
import React from 'react';

import '../@ui/styles/professional-screen.css';
import ComputerSvgLogo from '../component/computerSvg';
import AboutMe from './contact-page';

const ProfessionalScreen: React.FC = () => {
  return (
    <div className='flex lg:flex-row justify-between items-center h-screen md:flex-col sm:flex-col'>
      <div className='flex flex-col w-1/2 text-[18px] sm:w-full md:w-full '>
        <AboutMe />
      </div>

      <div className='px-24 animate-computer w-[45%] sm:hidden md:hidden lg:block'>
        <ComputerSvgLogo />
      </div>
    </div>
  );
};

export default ProfessionalScreen;
