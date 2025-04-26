import {
  Ekai,
  Leavoda,
  ShareLook,
  AidemoneyApp,
  ShareLookLesson,
  ChoiceRemitHome,
} from '../assets';

interface Logo {
  name: string;
  url: string;
}

import { Project } from './type';

export const skillslogos: Logo[] = [
  {
    name: 'JavaScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'React',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Node',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'CSS3',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
  },
  {
    name: 'Bootstrap',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  },
  {
    name: 'HTML5',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    name: 'Git',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  },

  {
    name: 'Visual Studio',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg',
  },

  {
    name: 'MongoDB',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
  },
  {
    name: 'Express',
    url: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png',
  },

  {
    name: 'React Native',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'AWS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.svgrepo.com/show/439022/typescript.svg',
  },
  {
    name: 'Xcode',
    url: 'https://iphoneros.com/wp-content/uploads/2023/12/xocdeoijew.png',
  },
  {
    name: 'NextJS',
    url: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--open-source-framework-code-logos-and-brands-pack-icons-9325303.png?f=webp',
  },
];

export const projectsData: Project[] = [
  {
    id: 'Leavoda',
    title: 'Service Management Software',
    category: 'website',
    description:
      'Leavoda is designed to help you manage your field service business more efficiently. With our intuitive and powerful platform, you can handle everything from job scheduling to invoicing, all in one place.',
    image: Leavoda.src,
    technologies: [
      'React',
      'Vite',
      'Next.js',
      'Tailwindcss',
      'Node.js',
      'AWS',
      'Firebase',
    ],
    websiteUrl: 'https://leavoda.com/en/why-leavoda',
  },
  {
    id: 'Sharelook ',
    title: 'Sharelook ',
    category: 'website',
    description:
      'ShareLook combines a full-service, backend learning management system (LMS), with searchable archives of training content developed and provided specifically for your business.',
    image: ShareLook.src,
    technologies: [
      'React',
      'Vite',
      'Next.js',
      'Tailwindcss',
      'TypeScript',
      'Node.js',
      'S3 Bucket',
      'Stripe',
      'CI/CD',
      'Route 53',
    ],
    websiteUrl: 'https://sharelookapp.com/',
  },
  {
    id: 'Ekai-ai',
    title: 'Ekai Slack Twin',
    category: 'website',
    description:
      'Handles repeated & routine queries ekai delivers, fully crafted message in your tone from your personal knowledge base automatically or by using /ekai anywhere intrigating with slack.',
    image: Ekai.src,
    technologies: [
      'Next.js',
      'CSS',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Jenkins',
      'CI/CD',
      'AI',
      'LLM',
      'Stripe',
    ],
    websiteUrl: 'https://yourekai.com/',
  },
  {
    id: 'ChoiceRemit',
    title: 'ChoiceRemit',
    category: 'application',
    description:
      'Embark on a hassle-free money transfer journey with Choice Remit, tailored exclusively for users in the USA.This platform ensures a smooth and secure experience. Simply follow these steps:',
    image: ChoiceRemitHome.src,
    slogan: 'FinTech Mobile Application!',
    technologies: [
      'React Native',
      'iOS',
      'Android',
      'TypeScript',
      'Redux',
      'CodePush',
      'CI/CD',
      'CLI',
      'AppCenter',
      'PlayStore',
      'AppStore',
      'Xcode',
    ],
    websiteUrl:
      'https://play.google.com/store/apps/details?id=com.choiceremit.choicer',
  },
  {
    id: 'AideMoney',
    title: 'AideMoney',
    category: 'application',
    description:
      'AiDEMONEY help you get everything you’d expect from a world-class money remittance service—plus a “give back” model that funds Africa with every dollar you send back home',
    image: AidemoneyApp.src,
    slogan: 'Send Money to Africa!',
    technologies: [
      'React Native',
      'iOS',
      'Android',
      'TypeScript',
      'Redux',
      'CodePush',
      'CI/CD',
      'CLI',
      'AppCenter',
      'PlayStore',
      'AppStore',
      'Xcode',
    ],
    websiteUrl: 'https://aidemoney.com/',
  },
  {
    id: 'Sharelook',
    title: 'Sharelook',
    category: 'application',
    description:
      'The app also includes the ability to schedule,host training events anywhere in the world, through the apps live-broadcast capability with real-time Q&A and audience participation',
    image: ShareLookLesson.src,
    slogan: 'Learning management App!',
    technologies: [
      'iOS',
      'Android',
      'Amazon S3',
      'Amazon Chime',
      'React Native',
      'Redux',
      'CI/CD',
      'Expo',
      'AppCenter',
      'PlayStore',
      'AppStore',
      'Xcode',
    ],
    websiteUrl:
      'https://play.google.com/store/apps/details?id=com.threeviewgroup.sharelook&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
  },
];

export const experiences: {
  id: number;
  title: string;
  company: string;
  period: string;
  achievements: string;
  position: 'right' | 'left';
}[] = [
  {
    id: 1,
    title: 'React Developer',
    company: 'Leavoda',
    period: 'Dec 2024 - present ( 5 months) ',
    achievements:
      'Implemented a dark mode feature in Next.js, achieving full compatibility cross-browser and cross-device',
    position: 'right',
  },
  {
    id: 2,
    title: 'React Native Developer',
    company: 'Machnet Technology',
    period: 'Sept 2021 - Dec 2022 (1 year 3 months)',
    achievements:
      'I developed high-performance applications using React-Native, TypeScript ReactJs, Redux, CSS, and HTML. I implemented test-driven development and collaborated with Agile teams to ensure seamless user experiences.',
    position: 'left',
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'E-Signature Pvt. Ltd',
    period: 'Jun 2019 - Aug 2021 (2 year 2 months)',
    achievements:
      'Led projects to develop software for locating in-house tooling in manufacturing plants, reducing production downtime',
    position: 'right',
  },
  {
    id: 4,
    title: 'junior Software Engineer',
    company: 'Build Chnange Organization',
    period: 'Fab 2019 - May 2021 (4 months)',
    achievements:
      'I Performed daily coding, testing, and debugging of native Android/iOS modules, enhancing app stability through rigorous peer code reviews and iterative feedback. ',
    position: 'left',
  },
];
