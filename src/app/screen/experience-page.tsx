'use client';
import React from 'react';
import WorkExperienceTimeline from '../component/timeline';
import { experiences } from '../helper/data';

export default function WorkExperience() {
  return (
    <div className='min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='rounded-lg md:rounded-3xl p-10 md:p-10 mb-12 md:mb-12 text-center border-4 shadow-xl md:shadow-2xl shadow-purple-500/30'>
        <h1 className='text-5xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900'>
          MY WORK EXPERIENCE
        </h1>
        <p className='text-base md:text-xl text-gray-700'>
          Following are some of the experiences I have gained over the years.
        </p>
      </div>

      {/* Timeline Section */}
      <div className='max-w-6xl mx-auto px-4 sm:px-0'>
        <WorkExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}
