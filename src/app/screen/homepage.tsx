'use client';
import React, { useEffect, useState } from 'react';

import '../@ui/styles/Home-styles.css';
import SkillsPage from './skills-page';
import Svganimation from './loadinPage';
import ProjectDetails from './project-work';
import ProfessionalScreen from './professional-screen';
import AnimatedBackground from './landing-page';
import WorkExperience from './experience-page';
import { Footer } from '../component/footer-component';

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
      <div className='MainContainer'>
        <div className='LeftHalf' />
        <div className='overlay'>
          <Svganimation />
        </div>
        <div className='RightHalf' />
      </div>
    );
  }

  return (
    <>
      <AnimatedBackground>
        <ProfessionalScreen />
        <ProjectDetails />
        <WorkExperience />
        <SkillsPage />
        <Footer />
      </AnimatedBackground>
    </>
  );
};

export default Homepage;
