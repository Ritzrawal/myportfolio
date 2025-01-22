"use client";
import React from "react";

import RSvgLogo from "../component/RletterSvg";
import "../@ui/styles/professional-screen.css";
import ComputerSvgLogo from "../component/computerSvg";

const ProfessionalScreen: React.FC = () => {
  return (
    <div className='computer-main-container'>
      <div className='computer-main-rightside-container'>
        <div className='computer-main-title-logo'>
          <RSvgLogo />
        </div>
        <div className='computer-main-title'>Software Developer</div>
        <div className='text-3xl font-bold underline'>
          Hey there, welcome to my Portfolio! I am Ritesh, a highly motivated
          and dedicated React Frontend Developer with strong knowledge of React,
          Redux, React Native, NextJs, Tailwind CSS, JavaScript, CSS, Node, and
          HTML. Seeking an opportunity to leverage my skills and knowledge to
          contribute to a dynamic development team while continuously enhancing
          my expertise.
        </div>
      </div>

      <div className='computer-image'>
        <ComputerSvgLogo />
      </div>
    </div>
  );
};

export default ProfessionalScreen;
