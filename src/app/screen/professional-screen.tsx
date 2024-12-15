import React from "react";
import "../@ui/styles/professional-screen.css";

import { RSvgLogo } from "../component";
import ComputerSvgLogo from "../component/computerSvg";

interface ProfessionalScreenProps {}

const ProfessionalScreen: React.FC<ProfessionalScreenProps> = () => {
  return (
    <div className="computer-main-container">
      <div className="computer-main-rightside-container">
        <div className="computer-main-title-logo">
          <RSvgLogo />
        </div>
        <div className="computer-main-title">Software Developer</div>
        <div className="aboutme-description-details">
          Hey there, welcome to my Portfolio! I'm Ritesh, a highly motivated and
          dedicated React Frontend Developer with strong knowledge of React,
          Redux, React Native, NextJs, Tailwind CSS, JavaScript, CSS, Node, and
          HTML. Seeking an opportunity to leverage my skills and knowledge to
          contribute to a dynamic development team while continuously enhancing
          my expertise.
        </div>
      </div>

      <div className="computer-image">
        <ComputerSvgLogo />
      </div>
    </div>
  );
};

export default ProfessionalScreen;
