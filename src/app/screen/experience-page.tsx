'use client';
import React from 'react';
import WorkExperienceTimeline from '../component/timeline';
import { experiences } from '../helper/data';

export default function WorkExperience() {
  return (
    <div className='min-h-screen max-w-6xl mx-auto'>
      <div className='rounded-3xl p-10 mb-12 text-center border-4 shadow-2xl shadow-purple-500/30'>
        <h1 className='text-5xl font-bold mb-4 text-gray-900'>
          MY WORK EXPERIENCE
        </h1>
        <p className='text-xl text-gray-700'>
          Following are some of the experiences I have gained over the years.
        </p>
      </div>
      <div className='max-w-6xl mx-auto'>
        <WorkExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
