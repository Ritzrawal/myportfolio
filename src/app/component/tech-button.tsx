'use client';

import {
  FigmaIcon,
  CodepenIcon,
  FileCodeIcon,
  ServerIcon,
  DatabaseIcon,
  GithubIcon,
  GitBranchIcon,
  CloudIcon,
} from 'lucide-react';

interface TechButtonProps {
  name: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}

export function TechButton({ name, icon, onClick }: TechButtonProps) {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = () => {
    switch (icon?.toLowerCase()) {
      case 'figma':
        return <FigmaIcon className='w-4 h-4' />;
      case 'css3':
      case 'html5':
      case 'typescript':
        return <FileCodeIcon className='w-4 h-4' />;
      case 'nextjs':
      case 'react':
      case 'remix':
      case 'vite':
      case 'motion':
      case 'redux':
      case 'tailwind':
      case 'bootstrap':
      case 'shadcn':
        return <CodepenIcon className='w-4 h-4' />;
      case 'javascript':
      case 'java':
      case 'kotlin':
      case 'python':
      case 'nodejs':
        return <FileCodeIcon className='w-4 h-4' />;
      case 'firebase':
      case 'supabase':
      case 'mongodb':
      case 'postgresql':
      case 'mysql':
        return <DatabaseIcon className='w-4 h-4' />;
      case 'github':
        return <GithubIcon className='w-4 h-4' />;
      case 'gitaction':
        return <GitBranchIcon className='w-4 h-4' />;
      case 'docker':
      case 'kubernetes':
        return <ServerIcon className='w-4 h-4' />;
      case 'aws':
        return <CloudIcon className='w-4 h-4' />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all  hover:bg-[#6DD5ED] focus:outline-none focus:ring-2 focus:bg-[#6DD5ED] border-4 shadow-2xl shadow-purple-500/30'
    >
      {icon && renderIcon()}
      {name}
    </button>
  );
}
