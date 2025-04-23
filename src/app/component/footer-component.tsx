import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  name?: string;
  year?: number;
  socialLinks?: {
    github?: string;
    email?: string;
    linkedin?: string;
  };
}

export function Footer({
  name = 'Ritesh Rawal',
  year = 2025,
  socialLinks = {
    github: 'https://github.com/Ritzrawal',
    email: 'mailto:riteshrawal31@gmail.com',
    linkedin: 'https://linkedin.com/in/rawal-ritesh/',
  },
}: FooterProps) {
  return (
    <footer className='w-ful py-4 px-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-sm text-gray-700'>
          &copy; {year} {name}. All Rights Reserved.
        </div>

        <div className='flex items-center space-x-4'>
          {socialLinks.github && (
            <Link
              href={socialLinks.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors'
              aria-label='GitHub'
            >
              <Github size={20} />
            </Link>
          )}

          {socialLinks.email && (
            <Link
              href={socialLinks.email}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors'
              aria-label='Instagram'
            >
              <Mail size={20} />
            </Link>
          )}

          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-gray-900 transition-colors'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
