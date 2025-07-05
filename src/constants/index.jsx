import { LuGithub, LuFacebook, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { cva } from 'class-variance-authority';
import variantData from '../data';
import ai from '../assets/projects/AI Project36 and 1 more page - Personal 3 - Microsoft​ Edge 05_07_2025 09_34_33 م.png'
import cruds from '../assets/projects/Cruds.jpg';
import vesperr from '../assets/projects/vercel.png';
import smoothies from '../assets/projects/Smoothies.jpg';
import travel from '../assets/projects/Travel.png';
import yammy from '../assets/projects/Yammy.png';
import reactapp from '../assets/projects/React App.jpg';
import ecommercereact from '../assets/projects/Ecommerce React.jpg';
import imgapp from '../assets/projects/Image-Search-App.jpg';
import booksearch from '../assets/projects/Book Search App.jpg';
import buildimg from '../assets/projects/Build-An-Image-Editor.jpg';
import qr from '../assets/projects/QR-Generator.jpg';
import dictionaryapp from '../assets/projects/Dictionary-App.jpg';
import todoList from '../assets/projects/To-Do-List.jpg';
import quote from '../assets/projects/Quote-Generator.jpg';
import game from '../assets/projects/Game-X-O.jpg';
import digitalClock from '../assets/projects/Digital-Clock.jpg';
import quizApp from '../assets/projects/Quiz-App.jpg';

import html from '../assets/language-logos/html.svg';
import css from '../assets/language-logos/css.png';
import javascript from '../assets/language-logos/javascript.svg';
import typescript from '../assets/language-logos/typescript.svg';
import sass from '../assets/language-logos/sass.svg';
import git from '../assets/language-logos/git.png';
import github from '../assets/language-logos/github.svg';
import bootstrap from '../assets/language-logos/bootstrap.svg';
import vite from '../assets/language-logos/vite.svg';
import react from '../assets/language-logos/react.png';
import next from '../assets/language-logos/next.svg';
import vue from '../assets/language-logos/vue.ico';
import vercel from '../assets/language-logos/vercel.svg';
import npm from '../assets/language-logos/npm.png';
import tailwind from '../assets/language-logos/tailwind.png';
import mui from '../assets/language-logos/mui.png';
import webpack from '../assets/language-logos/webpack.png';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      100: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});

const outlineButtonVariants = cva('btn-outline', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      100: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    border: {
      false: 'border-0',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});
const BadgeVariants = cva('badge', {
  variants: {
    variant: {
      ...variantData,
    },
    rounded: {
      true: 'rounded',
      pill: 'pill',
      circle: 'circle',
    },
    size: {
      xs: 'text-xs px-1 py-0',
      sm: 'text-sm px-2 py-2',
      base: 'text-base px-1 py-1',
      lg: 'text-lg px-1 py-1',
      xl: 'text-xl px-1 py-1',
    },
  },
  defaultVariants: {
    variant: 'primary',
    rounded: 'pill',
  },
});

const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/mohamedbadway',
    name: 'Github',
    icon: <LuGithub size={20} />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/eng-badway-0a2976248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    name: 'Linkedin',
    icon: <LuLinkedin size={20} />,
  },
  {
    id: 3,
    href: '',
    name: 'Facebook',
    icon: <LuFacebook size={20} />,
  },
  {
    id: 4,
    href: '',
    name: 'Instagram',
    icon: <LuInstagram size={20} />,
  },
];
const projects = [
  {
    id: 1,
    image: reactapp,
    title: 'E-commerce React App',
    link: {
      live: 'https://ecommerce-react-delta-ivory.vercel.app/',
      github: 'https://github.com/mohamedbadway/ecommerce_react.git',
    },
    direction: '100',
  },
  {
    id: 2,
    image: ecommercereact,
    title: 'E-commerce React',
    link: {
      live: 'https://react-ecommerce-8xkoed3vd-mohameds-projects-896135a4.vercel.app/',
      github: 'https://github.com/mohamedbadway/REACT_ECOMMERCE.git',
    },
    direction: '-100',
  },
  {
    id: 3,
    image: yammy,
    title: 'Yammy',
    link: {
      live: 'https://yammy-gamma.vercel.app/',
      github: 'https://github.com/mohamedbadway/yi.git',
    },
    direction: '100',
  },
  {
    id: 4,
    image: travel,
    title: 'Travel',
    link: {
      live: 'https://travel-opal-eight.vercel.app/',
      github: 'https://github.com/mohamedbadway/project_travel.git',
    },
    direction: '-100',
  },
  {
    id: 5,
    image: ai,
    title: 'ai',
    link: {
      live: 'https://ai-p-36-8t1mnn00v-mohameds-projects-896135a4.vercel.app/',
      github: 'https://github.com/mohamedbadway/chat-gpt-badway.git',
    },
    direction: '100',
  },
  // {
  //   id: 6,
  //   image: smoothies,
  //   title: 'Smoothies',
  //   link: {
  //     live: 'https://smoothies-tau.vercel.app/',
  //     github: 'https://github.com/HazemMohamed269/Smoothies.git',
  //   },
  //   direction: '-100',
  // },
  // {
  //   id: 7,
  //   image: cruds,
  //   title: 'Cruds',
  //   link: {
  //     live: 'https://cruds-jet.vercel.app/',
  //     github: 'https://github.com/HazemMohamed269/Cruds.git',
  //   },
  //   direction: '100',
  // },
  {
    id: 8,
    image: booksearch,
    title: 'Book-Search-App',
    link: {
      live: 'https://hazemmohamedbook-search-site.vercel.app/',
      github: 'https://github.com/mohamedbadway/liabrary.git',
    },
    direction: '-100',
  },
  // {
  //   id: 9,
  // //   image: buildimg,
  // //   title: 'Build-An-Image-Editor',
  // //   link: {
  // //     live: 'https://build-an-image-editor.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Build-An-Image-Editor.git',
  // //   },
  // //   direction: '100',
  // // },
  // // {
  // //   id: 10,
  // //   image: quizApp,
  // //   title: 'Quiz App',
  // //   link: {
  // //     live: 'https://quiz-app-self-gamma.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Quiz-App.git',
  // //   },
  // //   direction: '-100',
  // // },
  // // {
  // //   id: 11,
  // //   image: game,
  // //   title: 'Game X-O',
  // //   link: {
  // //     live: 'https://game-js-gamma.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Game-JS.git',
  // //   },
  // //   direction: '100',
  // // },
  // // {
  // //   id: 12,
  // //   image: quote,
  // //   title: 'Quote-Generator',
  // //   link: {
  // //     live: 'https://quote-generator-rho-six.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Quote-Generator.git',
  // //   },
  // //   direction: '-100',
  // // },
  // // {
  // //   id: 13,
  // //   image: todoList,
  // //   title: 'Todo List',
  // //   link: {
  // //     live: 'https://to-do-list-ruddy-delta.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/To-Do-List.git',
  // //   },
  // //   direction: '100',
  // // },
  // // {
  // //   id: 14,
  // //   image: dictionaryapp,
  // //   title: 'Dictionary-App',
  // //   link: {
  // //     live: 'https://hazemmohameddictionary-app.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Dictionary-App.git',
  // //   },
  // //   direction: '-100',
  // // },
  // // {
  // //   id: 15,
  // //   image: qr,
  // //   title: 'Qr-Generator',
  // //   link: {
  // //     live: 'https://qr-generator-pi-mocha.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/QR-Generator.git',
  // //   },
  // //   direction: '100',
  // // },
  // // {
  // //   id: 16,
  // //   image: digitalClock,
  // //   title: 'Digital Clock',
  // //   link: {
  // //     live: 'https://digital-clock-nu-lyart.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Digital-Clock.git',
  // //   },
  // //   direction: '-100',
  // // },
  // // {
  // //   id: 17,
  // //   image: imgapp,
  // //   title: 'Image-Search-App',
  // //   link: {
  // //     live: 'https://image-search-app-opal-three.vercel.app/',
  // //     github: 'https://github.com/HazemMohamed269/Image-Search-App.git',
  // //   },
  // //   direction: '100',
  // // },
];
const skills = [
  {
    id: 1,
    skill: 'HTML',
    icon: <img className="img-fluid" src={html} alt="html" />,
    direction: '100',
  },
  {
    id: 2,
    skill: 'Css',
    icon: <img className="img-fluid" src={css} alt="css" />,
    direction: '-100',
  },
  {
    id: 3,
    skill: 'Javascript',
    icon: <img className="img-fluid" src={javascript} alt="javascript" />,
    direction: '100',
  },
  {
    id: 4,
    skill: 'Typescript',
    icon: <img className="img-fluid" src={typescript} alt="typescript" />,
    direction: '-100',
  },
  {
    id: 5,
    skill: 'React.js',
    icon: <img className="img-fluid" src={react} alt="react" />,
    direction: '100',
  },
  {
    id: 6,
    skill: 'Next.js',
    icon: <img className="img-fluid" src={next} alt="next" />,
    direction: '-100',
  },
  {
    id: 7,
    skill: 'Vue.js (Fundamentals)',
    icon: <img className="img-fluid" src={vue} alt="vue" />,
    direction: '100',
  },
  {
    id: 8,
    skill: 'Bootstrap',
    icon: <img className="img-fluid" src={bootstrap} alt="bootstrap" />,
    direction: '-100',
  },
  {
    id: 9,
    skill: 'Sass',
    icon: <img className="img-fluid" src={sass} alt="sass" />,
    direction: '100',
  },
  {
    id: 10,
    skill: 'Tailwind Css',
    icon: <img className="img-fluid" src={tailwind} alt="tailwind" />,
    direction: '-100',
  },
  {
    id: 11,
    skill: 'MUI',
    icon: <img className="img-fluid" src={mui} alt="mui" />,
    direction: '100',
  },
  {
    id: 12,
    skill: 'NPM',
    icon: <img className="img-fluid" src={npm} alt="npm" />,
    direction: '-100',
  },
  {
    id: 13,
    skill: 'Vite',
    icon: <img className="img-fluid" src={vite} alt="vite" />,
    direction: '100',
  },
  {
    id: 14,
    skill: 'Webpack',
    icon: <img className="img-fluid" src={webpack} alt="webpack" />,
    direction: '-100',
  },
  {
    id: 15,
    skill: 'Git',
    icon: <img className="img-fluid" src={git} alt="git" />,
    direction: '100',
  },
  {
    id: 16,
    skill: 'Github',
    icon: <img className="img-fluid" src={github} alt="github" />,
    direction: '-100',
  },
  {
    id: 17,
    skill: 'vercel',
    icon: <img className="img-fluid" src={vercel} alt="vercel" />,
    direction: '100',
  },
];

export {
  BadgeVariants,
  buttonVariants,
  outlineButtonVariants,
  socialLinks,
  projects,
  skills,
};
