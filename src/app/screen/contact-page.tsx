import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className='min-h-screen w-full p-4 flex flex-col items-center justify-center '>
      <div className='p-8 md:p-12  rounded-xl border-4 shadow-2xl shadow-purple-500/30'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <blockquote className='text-2xl md:text-3xl font-semibold mb-6'>
              &quot;Understanding customer needs and delivering high-quality
              work is my top priority.&quot;
            </blockquote>

            <div className='space-y-6 text-gray-700'>
              <p>
                Hi there! I&apos;m Ritesh. I&apos;m a software engineer with
                over 3 years of experience, recently graduated from Mohawk
                College In Project Management and Cyber Security. I have
                experience working in mobile development using React Native, web
                development, and full-stack development.
              </p>

              <p>
                During my software engineering career, I have worked with
                multiple programming languages and technologies such as
                JavaScript, NodeJS, TypeScript, React, React Native, and AWS. I
                earned my B.E. in Computer Science and Engineering back in 2017.
                My interests range from mobile apps and web apps to Al, and
                I&apos;m always eager to explore new tech horizons.
              </p>
            </div>

            <div className='flex gap-3 mt-8'>
              <Link
                href='https://linkedin.com'
                className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'
              >
                {/* <LinkedInIcon className='w-5 h-5' /> */}
                <span>LinkedIn</span>
              </Link>
              <Link
                href='https://github.com'
                className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'
              >
                {/* <GitHubIcon className='w-5 h-5' /> */}
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
