import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className='min-h-screen py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='bg-white rounded-3xl shadow-lg p-10 mb-12 text-center'>
          <h1 className='text-5xl font-bold mb-4 text-gray-900'>PROJECTS</h1>
          <p className='text-xl text-gray-700'>
            Here are a few of the projects I&apos;ve worked on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex justify-center gap-4 mb-12'>
          <button className='px-8 py-3 bg-blue-500 text-white font-medium rounded-full'>
            Website Development
          </button>
          <button className='px-8 py-3 bg-white text-gray-800 font-medium rounded-full'>
            Application Development
          </button>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Project 1 */}
          <div className='bg-white rounded-3xl overflow-hidden shadow-lg'>
            <div className='relative h-64'>
              <Image
                src='/placeholder.svg?height=256&width=384'
                alt='The Kicks Store'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent p-6'>
                <div className='bg-white inline-block px-3 py-1 rounded-md'>
                  <h3 className='font-bold text-black'>SHOES YOU NEED</h3>
                </div>
                <p className='text-white text-sm mt-2'>Get your best kicks!</p>
                <button className='bg-white text-black text-xs px-3 py-1 rounded-md mt-2'>
                  Shop
                </button>
              </div>
            </div>
            <div className='p-6'>
              <div className='text-center py-4 border-b border-gray-200'>
                <h3 className='font-bold uppercase'>EXPLORE YOUR OWN STYLE!</h3>
              </div>
              <h2 className='text-2xl font-bold mt-4 mb-3'>The Kicks Store</h2>
              <p className='text-gray-700 mb-6'>
                The Kicks Store is a modern commerce website for sneakers. It
                features a shopping cart and a product detail page.
              </p>
              <div className='flex flex-wrap gap-2 mb-6'>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  React
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Vite
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Tailwindcss
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Node.js
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Daisyui
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Motion
                </span>
                <span className='px-3 py-1 bg-gray-200 rounded-full text-sm'>
                  Firebase
                </span>
              </div>
              <Link
                href='#'
                className='block text-center py-3 border border-gray-300 rounded-lg font-medium'
              >
                VISIT WEBSITE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
