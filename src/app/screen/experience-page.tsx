'use client';
import React from 'react';
import WorkExperienceTimeline from '../component/timeline';

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      title: 'IT Systems Assistant Coop II',
      company: 'Government of Ontario, Canada',
      period: 'Sep 2024 - Dec 2024 (4 months)',
      achievements:
        'Implemented a dark mode feature in Next.js, achieving full compatibility cross-browser and cross-device',
      position: 'right' as 'right' | 'left',
    },
    {
      id: 2,
      title: 'IT Systems Assistant Coop I',
      company: 'Government of Ontario, Canada',
      period: 'Jan 2024 - Apr 2024 (4 months)',
      achievements:
        'Developed VBA scripts to handle errors in institution codes, improving work efficiency by 10%',
      position: 'left' as 'right' | 'left',
    },
    {
      id: 3,
      title: 'Senior Service Parts Engineer',
      company: 'Toyota Motor Asia, Thailand',
      period: 'Dec 2021 - Dec 2022 (1 year)',
      achievements:
        'Led projects to develop software for locating in-house tooling in manufacturing plants, reducing production downtime',
      position: 'right' as 'right' | 'left',
    },
  ];

  return (
    <div className='min-h-screen max-w-6xl mx-auto'>
      <div className='rounded-3xl p-10 mb-12 text-center border-4 shadow-2xl shadow-purple-500/30'>
        <h1 className='text-5xl font-bold mb-4 text-gray-900'>
          MY WORK EXPERIENCE
        </h1>
        <p className='text-xl text-gray-700'>
          Here are a few of the projects I&apos;ve worked on.
        </p>
      </div>
      <div className='max-w-6xl mx-auto'>
        <WorkExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
