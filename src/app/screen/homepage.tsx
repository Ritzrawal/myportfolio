"use client";
import React, { useEffect, useState } from "react";
import Svganimation from "./loadinPage";
import "../@ui/styles/Home-styles.css";

import SkillsPage from "./skills-page";
import ContactPage from "./contact-page";
import ProfessionalScreen from "./professional-screen";

import ProjectDetails from "./project-work";

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="MainContainer">
        <div className="LeftHalf" />
        <div className="overlay">
          <Svganimation />
        </div>
        <div className="RightHalf" />
      </div>
    );
  }

  return (
    <>
      <ProfessionalScreen />
      <ProjectDetails />
      <SkillsPage />
      <ContactPage />
    </>
  );
};

export default Homepage;
