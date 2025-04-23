import {
  Leavoda,
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
    id: 'kicks-store',
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
    id: 'mr-andaman',
    title: 'Mr. Andaman',
    category: 'website',
    description:
      "Mr. Andaman — a modern travel agency website that helps users easily book and manage trips to Thailand's beautiful Southern Islands.",
    image: AidemoneyApp.src,
    banner: {
      title: 'Discover the Beauty of the Andaman Sea',
      subtitle:
        "Experience Thailand's gem islands, stunning landscapes, crystal clear waters, and more",
    },
    technologies: [
      'Remix',
      'Tailwindcss',
      'TypeScript',
      'Node.js',
      'MySQL',
      'S3 Bucket',
      'Stripe',
      'DigitalOcean',
    ],
    websiteUrl: '#',
  },
  {
    id: 'siam-food',
    title: 'Siam Food Delivery',
    category: 'application',
    description:
      'Siam Food Delivery is an online platform that brings authentic Thai cuisine to your doorstep with a seamless ordering experience.',
    image: AidemoneyApp.src,
    technologies: [
      'Next.js',
      'Tailwindcss',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Stripe',
    ],
    websiteUrl: '#',
  },
  {
    id: 'kicks-store2',
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
    title: 'IT Systems Assistant Coop II',
    company: 'Government of Ontario, Canada',
    period: 'Sep 2024 - Dec 2024 (4 months)',
    achievements:
      'Implemented a dark mode feature in Next.js, achieving full compatibility cross-browser and cross-device',
    position: 'right',
  },
  {
    id: 2,
    title: 'IT Systems Assistant Coop I',
    company: 'Government of Ontario, Canada',
    period: 'Jan 2024 - Apr 2024 (4 months)',
    achievements:
      'Developed VBA scripts to handle errors in institution codes, improving work efficiency by 10%',
    position: 'left',
  },
  {
    id: 3,
    title: 'Senior Service Parts Engineer',
    company: 'Toyota Motor Asia, Thailand',
    period: 'Dec 2021 - Dec 2022 (1 year)',
    achievements:
      'Led projects to develop software for locating in-house tooling in manufacturing plants, reducing production downtime',
    position: 'right',
  },
];
