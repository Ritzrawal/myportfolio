'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import '../@ui/styles/skills-page-style.css';
import { skillslogos } from '../helper/data';
import { DevTools } from '../component/skill-component';

interface Logo {
  name: string;
  url: string;
}

const Skills: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 '>
      <div className='rounded-3xl p-10 mb-12 text-center border-4 shadow-2xl shadow-purple-500/30'>
        <h1 className='text-5xl font-bold mb-4 text-gray-900'>TECH STACK</h1>
        <p className='text-xl text-gray-700'>
          Below are the technologies I have worked with and am currently using.
        </p>
      </div>

      <div className='grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-3  sm:pl-4 sm:pt-4 gap-4 rounded-xl md:p-8 border-4 shadow-2xl shadow-purple-500/30'>
        {skillslogos.map((logo: Logo, index: number) => (
          <div
            // className={}
            key={index}
            // style={{
            //   transform:
            //     scrollY > 200
            //       ? `translateY(${Math.max(-50, 50 - scrollY / 5)}px)`
            //       : 'translateY(100px)',
            //   opacity: scrollY > 200 ? 1 : 0,
            //   transition: `all 0.5s ease-out ${index * 0.1}s`,
            // }}
          >
            <Image src={logo.url} alt={logo.name} width={50} height={50} />
            <p className='text-gray-500'>{logo.name}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <DevTools />
      </div>
    </div>
  );
};

export default Skills;
