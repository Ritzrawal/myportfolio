import {
  Ekai,
  Leavoda,
  ShareLook,
  PesaDirect,
  AidemoneyApp,
  FrimPayFront,
  TransfaPayApp,
  ChoiceRemitFront,
  ShareLookLesson,
  PrabhuMobileHomePage,
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
      "Embark on a hassle-free money transfer journey with Choice Remit, tailored exclusively for users in the USA. Whether you're supporting loved ones or managing business transactions, our platform ensures a smooth and secure experience. Simply follow these steps:",
    image: AidemoneyApp.src,
    slogan: 'FinTech Mobile Application!',
    technologies: [
      'React Native',
      'iOS',
      'Android',
      'TypeScript',
      'Redux',
      'CodePush',
      'CI/CD',
      'AppCenter',
      'PlayStore',
      'AppStore',
      'Xcode',
    ],
    websiteUrl: '#',
  },
  {
    id: 'kicks-store3',
    title: 'The Kicks Store',
    category: 'website',
    description:
      'The Kicks Store is a modern commerce website for sneakers. It features a shopping cart and a product detail page.',
    image: Leavoda.src,
    banner: {
      title: 'SHOES YOU NEED',
      subtitle: 'Get your best kicks!',
      buttonText: 'Shop',
    },
    slogan: 'EXPLORE YOUR OWN STYLE!',
    technologies: [
      'React',
      'Vite',
      'Tailwindcss',
      'Node.js',
      'Daisyui',
      'Motion',
      'Firebase',
    ],
    websiteUrl: '#',
  },
  {
    id: 'kicks-store4',
    title: 'The Kicks Store',
    category: 'website',
    description:
      'The Kicks Store is a modern commerce website for sneakers. It features a shopping cart and a product detail page.',
    image: Leavoda.src,
    banner: {
      title: 'SHOES YOU NEED',
      subtitle: 'Get your best kicks!',
      buttonText: 'Shop',
    },
    slogan: 'EXPLORE YOUR OWN STYLE!',
    technologies: [
      'React',
      'Vite',
      'Tailwindcss',
      'Node.js',
      'Daisyui',
      'Motion',
      'Firebase',
    ],
    websiteUrl: '#',
  },
];

export const experiences = [
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
