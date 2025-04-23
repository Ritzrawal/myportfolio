'use client';

import { useState } from 'react';
import { ProjectCard } from '../component/project-card';
import { projectsData } from '../helper/data';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<
    'website' | 'application' | 'all'
  >('website');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className='min-h-screen bg-gradient-to-b py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='rounded-3xl p-10 mb-12 text-center border-4 shadow-2xl shadow-purple-500/30'>
          <h1 className='text-5xl font-bold mb-4 text-gray-900'>PROJECTS</h1>
          <p className='text-xl text-gray-700'>
            Here are a few of the projects I've worked on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex justify-center gap-4 mb-12'>
          <button
            className={`px-8 py-3 font-medium rounded-full ${
              activeCategory === 'website'
                ? 'bg-[#6DD5ED] text-white'
                : ' text-gray-800 border-4 shadow-2xl shadow-purple-500/30'
            }`}
            onClick={() => setActiveCategory('website')}
          >
            Website Development
          </button>
          <button
            className={`px-8 py-3 font-medium rounded-full ${
              activeCategory === 'application'
                ? 'bg-[#6DD5ED] text-white'
                : ' text-gray-800 border-4 shadow-2xl shadow-purple-500/30'
            }`}
            onClick={() => setActiveCategory('application')}
          >
            Application Development
          </button>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
