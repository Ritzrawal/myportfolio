'use client';

import type React from 'react';

import { useState } from 'react';
import { TechButton } from './tech-button';
import { Laptop, Server } from 'lucide-react';

// Define technology types and data
type Technology = {
  name: string;
  icon?: string;
  active?: boolean;
};

export function DevTools() {
  // Frontend technologies with initial state
  const [frontendTech, setFrontendTech] = useState<Technology[]>([
    { name: 'Figma', icon: 'figma' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'React Native', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Remix', icon: 'remix' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Motion', icon: 'motion' },
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Redux', icon: 'redux' },
    { name: 'TailwindCSS', icon: 'tailwind' },
    { name: 'Bootstrap5', icon: 'bootstrap' },
    { name: 'ShadcnUI', icon: 'shadcn' },
  ]);

  // Backend technologies with initial state
  const [backendTech, setBackendTech] = useState<Technology[]>([
    { name: 'Javascript', icon: 'javascript' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'nodejs' },
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'python' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
  ]);

  // Toggle active state of a technology

  return (
    <div className='max-w-6xl mx-auto'>
      {/* Header Section */}

      {/* Tech Cards Container - Column on mobile, row on larger screens */}
      <div className='grid grid-cols-2 lg:grid-cols-2 gap-6'>
        {/* Frontend Development Card */}
        <div className='rounded-xl p-6 md:p-8 border-4 shadow-2xl shadow-purple-500/30'>
          <div className='flex items-center gap-3 mb-6'>
            <Laptop className='w-6 h-6' />
            <h2 className='text-2xl font-bold'>Frontend Development</h2>
          </div>
          <div className='flex flex-wrap gap-2'>
            {frontendTech.map((tech, index) => (
              <TechButton
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                active={tech.active}
              />
            ))}
          </div>
        </div>

        {/* Backend Development Card */}
        <div className='rounded-xl p-6 md:p-8 border-4 shadow-2xl shadow-purple-500/30'>
          <div className='flex items-center gap-3 mb-6'>
            <Server className='w-6 h-6' />
            <h2 className='text-2xl font-bold'>Backend Development</h2>
          </div>
          <div className='flex flex-wrap gap-2'>
            {backendTech.map((tech, index) => (
              <TechButton
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                active={tech.active}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
