export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AI Trading Bot',
    desc: 'Developed an AI-powered trading bot leveraging machine learning for predictive analysis. Integrated real-time market data and algorithmic trading strategies to automate and optimize trade execution.',
    subdesc:
      '',
    href: 'https://github.com/vaibhavsadgir50/AI_Trading_BOT',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: 'assets/jupyter.svg',
      },
      {
        id: 3,
        name: 'numpy',
        path: '/assets/numpy.svg',
      },
      {
        id: 4,
        name: 'pandas',
        path: '/assets/pandas.svg',
      },
    ],
  },
  {
    title: 'Web Browser',
    desc: 'Built a lightweight, custom web browser using Python and PyQt. Features include tabbed browsing, basic search functionality, and an intuitive user interface for enhanced web navigation.',
    subdesc:
      '',
    href: 'https://github.com/vaibhavsadgir50/WebBrowser',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'html',
        path: 'assets/html.svg',
      },
      {
        id: 3,
        name: 'css',
        path: '/assets/css.svg',
      },
      {
        id: 4,
        name: 'javaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
  {
    title: 'Age Classification using ML',
    desc: 'This machine Learning model uses a decision tree-based algorithm for classifying age groups to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.',
    subdesc:
      '',
    href: 'https://github.com/vaibhavsadgir50/Age_Classification',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'react',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: 'assets/jupyter.svg',
      },
      {
        id: 3,
        name: 'scikit-learn',
        path: '/assets/scikit-Learn.svg',
      },
      {
        id: 4,
        name: 'numpy',
        path: '/assets/numpy.svg',
      },
    ],
  },
  {
    title: 'Music Recommendation System - Data Science',
    desc: 'A collaborative filtering approach is used to recommend music to users. It makes automatic predictions about the interests of a user by collecting preferences from many users (collaborating).',
    subdesc:
      ' ',
    href: 'https://github.com/vaibhavsadgir50/-LGMVIP--DataScience/blob/main/Music%20recommendation.ipynb',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Jupyter',
        path: 'assets/jupyter.svg',
      },
      {
        id: 3,
        name: 'tensorflow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 4,
        name: 'numpy',
        path: '/assets/numpy.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'BankBazaar.com',
    pos: 'Business Analyst',
    duration: '2024 - 2024',
    title: "Analyzed business processes and optimized API integrations to improve efficiency, data accessibility, and revenue growth. Streamlined workflows and implemented analytics solutions to support data-driven decision-making.",
    icon: '/assets/bankbazaar.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Yliway.com',
    pos: 'Full Stack Developer',
    duration: '2023 - 2024',
    title: "Designed and developed scalable web applications with both front-end and back-end technologies. Engineered a scalable WebRTC-based framework for seamless media handling, improving bandwidth efficiency and latency for large-scale events.",
    icon: '/assets/yliway.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Letsgrowmore.LLC',
    pos: 'Data Scinece Intern',
    duration: '2022 - 2022',
    title: "Assisted in data preprocessing, feature engineering, and building machine learning models to derive actionable insights. Developed data visualizations, optimized algorithms, and collaborated with teams to improve model performance and decision-making.",
    icon: '/assets/letsgrowmore.svg',
    animation: 'salute',
  },
];
