import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../helper/type';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='rounded-3xl overflow-hidden border-4 shadow-2xl shadow-purple-500/30'>
      <div className='relative h-64'>
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill //   sizes='100%'
          className='object-cover'
        />
        {project.banner && (
          <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent p-6 flex items-center justify-center'>
            <div className='text-center'>
              {project.banner.title.includes('SHOES') ? (
                <>
                  <div className='bg-white inline-block px-3 py-1 rounded-md'>
                    <h3 className='font-bold text-black'>
                      {project.banner.title}
                    </h3>
                  </div>
                  {project.banner.subtitle && (
                    <p className='text-white text-sm mt-2'>
                      {project.banner.subtitle}
                    </p>
                  )}
                  {project.banner.buttonText && (
                    <button className='bg-white text-black text-xs px-3 py-1 rounded-md mt-2'>
                      {project.banner.buttonText}
                    </button>
                  )}
                </>
              ) : (
                <>
                  <h3 className='text-2xl font-bold text-white'>
                    {project.banner.title}
                  </h3>
                  {project.banner.subtitle && (
                    <p className='text-sm mt-2 text-white'>
                      {project.banner.subtitle}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className='p-6'>
        {project.slogan && (
          <div className='text-center py-4 border-b border-gray-200'>
            <h3 className='font-bold uppercase'>{project.slogan}</h3>
          </div>
        )}
        <h2 className='text-2xl font-bold mt-4 mb-3'>{project.title}</h2>
        <p className='text-gray-700 mb-6'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 bg-gray-200 rounded-full text-sm'
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={project.websiteUrl}
          className='block text-center py-3 border border-gray-300 rounded-lg font-medium'
        >
          VISIT WEBSITE
        </Link>
      </div>
    </div>
  );
}
