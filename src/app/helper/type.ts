export interface IconProps {
  src: string;
  alt: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'website' | 'application';
  description: string;
  image: string;
  banner?: {
    title: string;
    subtitle?: string;
    buttonText?: string;
  };
  slogan?: string;
  technologies: string[];
  websiteUrl: string;
}

export interface ProjectsProps {
  projects: Project[];
}
