"use client";
import React from "react";

import RSvgLogo from "../component/RletterSvg";
import "../@ui/styles/professional-screen.css";
import ComputerSvgLogo from "../component/computerSvg";

const ProfessionalScreen: React.FC = () => {
  return (
    <div className='flex flex-row justify-between items-center h-screen bg-gradient-to-r from-[#859398] via-[#5A6A71] to-[#283048]'>
      <div className='flex flex-col w-1/2 text-[18px]'>
        <div className='flex w-1/2 pb-1/4 items-center justify-center'>
          <RSvgLogo />
        </div>
        <div className='text-3xl font-bold text-start pl-12 relative animate-title bg-gradient-to-r from-[#FF7F50] to-[#00FFFF] bg-clip-text text-transparent'>
          Software Developer
        </div>

        <div className='flex relative p-12 text-start font-normal text-[#D3D3D3] font-sans text-lg animate-details'>
          Hey there, welcome to my Portfolio! I am Ritesh, a highly motivated
          and dedicated React and React-Native Frontend Developer with strong
          knowledge of React, Redux, React Native, NextJs, Tailwind CSS,
          JavaScript, CSS, Node, and HTML. Seeking an opportunity to leverage my
          skills and knowledge to contribute to a dynamic development team while
          continuously enhancing my expertise.
        </div>
      </div>

      <div className='px-24 animate-computer w-[45%]'>
        <ComputerSvgLogo />
      </div>
    </div>
  );
};

export default ProfessionalScreen;
