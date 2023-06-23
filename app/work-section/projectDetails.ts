export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: 'SecondChance',
    description:
      'SecondChance is a web app designed to create a vibrant student market ecosystem, providing a platform for students to buy and sell their second-hand items at affordable prices.',
    technologies: ['React', 'Nodejs', 'MongoDB', 'Expressjs'],
    github: 'https://github.com/Samarjiit/second',
    demo: 'https://secondchance.onrender.com/',
    image: require('.//../../public/projects/skywatch-new.webp'),
    available: true,
  },
  {
    id: 2,
    name: 'Alpaca Image Generator',
    description:
      'An image generator website that allows users to generate, combine, and download images.',
    technologies: ['React', 'CSS', 'Merge Images'],
    github: '',
    demo: 'http://alpaca-image-generator-beta.vercel.app',
    image: require('.//../../public/projects/alpaca-new.webp'),
    available: true,
  },
  {
    id: 3,
    name: 'GDSC-PGDAV',
    description:
      'Developed a website for the Google Developer Student Club at PGDAV College, combining creativity and technical expertise to deliver an engaging online platform where student can learn and watch workshop',
    technologies: ['html', 'CSS', 'javascript'],
    github: 'https://github.com/DSCPGDAV/website',
    demo: 'https://dscpgdav.netlify.app/',
    image: require('.//../../public/projects/ab.webp'),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: 'Hebron Statup Lab Website',
    description:
      'SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 2,
    name: 'RAGS Scrubs Website',
    description:
      'An image generator website that allows users to generate, combine, and download images.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 3,
    name: 'Crown Branding Agency Website',
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image:
      '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 4,
    name: 'Titi Mobile App',
    description:
      'TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75',
    available: false,
  },
];
