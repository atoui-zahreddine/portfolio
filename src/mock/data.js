import { nanoid } from 'nanoid';

// Constants
const CONSTANTS = {
  FRONT: 1,
  BACK: 2,
  PS: 3,
  OTHER: 4,
};

// HEAD DATA
export const headData = {
  title: 'Zahreddine | atoui', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "I'm web developer , and this is my portfolio , welcome <3 <3 <3 .", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zahreddine Atoui',
  subtitle: 'A Software Engineer Student',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hello, my name is Zahreddine Atoui. I have been performing as a full stack web developer for 02 years and am still in the process of gaining more experiences through more years.

  My educational background possesses a Engineer's degree in Computer Science. Some effective on-job training make me more skilled in this field to work in any circumstances.
  
  I am passionate of websites and back-end coding. I like to play with codes and results the best output from my work. I have been working in web languages & technologies like the JavaScript , HTML, CSS , Node js , Java , Spring Frameworks .`,
  paragraphTwo:
      'I can solve problems analytically and can face any complex situation with a motive of fixing it with total vividness. Also, I handle customers with a friend-like manner keeping myself within professionalism.',
  paragraphThree:
      'So, I guarantee my enthusiasm in work and fulfilling my project with inexpressible efforts.',
  resume:
      'https://docs.google.com/document/d/1KhMjggZunMncDaq0fWpM0fKFo5KebgwvCCPWiN8ES6U/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsCategoriesData = [
  { name: 'Front End', id: 1 },
  { name: 'Back End', id: 2 },
  { name: 'Problem Solving', id: 3 },
  { name: 'Other', id: 4 },
];

export const projectsData = [
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Miecolo Shop',
    info: 'E-commerce Web application dedicated to selling bee hives connected systems to track geolocation and control weight, temperature and humidity of Apiary, With a dashboard to control and manage orders and products (Freelance).',
    info2: 'Tech Used : Next JS, Redux, Redux Saga, i18n, Antd ',
    category: CONSTANTS.FRONT,
    url: 'https://shop.miecolo.biz/',
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Quantum Risk Calculator',
    info: 'Website For Quantum Risk  Analysis (Freelance).',
    info2: 'Tech Used : Next js , Tailwind css',
    category: CONSTANTS.FRONT,
    url: 'https://qbyte.btq.li/',
  },
  {
    id: nanoid(),
    img: 'project7.png',
    title: 'Azimuth ADV Website',
    info: 'Static Website for advertising agency (Freelance)',
    info2: 'Tech Used : HTML, JavaScript, Tailwind css',
    category: CONSTANTS.FRONT,
    url: 'http://www.azimuthadv.com.au/',
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Doctor Appointment',
    info: 'Static design from figma community for doctor appointements  ',
    info2: 'Tech Used : React js , Tailwind css',
    category: CONSTANTS.FRONT,
    url: 'https://doctor-appoitment-1.netlify.app/',
    repo: 'https://github.com/atoui-zahreddine/doctor-appointment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Business Process Builder',
    info: 'Static design from dribbble for business process builder',
    info2: 'Tech Used : React js , CSS',
    category: CONSTANTS.FRONT,
    url: 'https://atoui-zahreddine.github.io/dribbble-template-clone-01/',
    repo: 'https://github.com/atoui-zahreddine/dribbble-template-clone-01', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Online video converter',
    info: 'Online video converter that converts webm videos to mp4',
    info2: 'Tech Used : Express js , ejs , tailwindcss',
    category: CONSTANTS.FRONT,
    url: 'https://online-video-converter-1.herokuapp.com/',
    repo: 'https://github.com/atoui-zahreddine/online-video-converter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'API for Online Online video Converter',
    info: 'API for converting videos from webm to mp4 ',
    info2: 'Tech Used : Node Js ,Express Js ',
    category: CONSTANTS.BACK,
    repo: 'https://github.com/atoui-zahreddine/online-video-converter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'API for scrapping  Issatso website',
    info: 'API for scrapping majors schedule from issatso university website',
    info2: 'Tech Used : Node Js ,Express Js , cheerio , node-schedule',
    category: CONSTANTS.BACK,
    repo: 'https://github.com/atoui-zahreddine/issatso-schedule-scrapper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'API for Online Burger Builder',
    info: 'API for burger builder web app , it cover authentication ,  crud operations ',
    info2: 'Tech Used : Spring Boot , MySql , hibernate , Docker',
    category: CONSTANTS.BACK,
    repo: 'https://github.com/atoui-zahreddine/burgerBuilderBackend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'API for Hrayer Mobile App',
    info: 'API for Hrayer mobile app , it cover authentication , crud operations  , Quote Notifcations .',
    info2: 'Tech Used : Spring Boot , MySql , hibernate , Docker',
    category: CONSTANTS.BACK,
    repo: 'https://github.com/atoui-zahreddine/hack4her', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'problem-solving.png',
    title: 'HashCode 2020  qualification round',
    info: 'HashCode 2020  qualification round',
    info2: 'Tech Used : C++',
    category: CONSTANTS.PS,
    repo: 'https://github.com/atoui-zahreddine/hashcode20', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iot.jpeg',
    title: 'IOT Based Monitoring System for Comatose Patients',
    info: 'It gather realtime data from sensors linked with raspberry pi and send them to firebase to be consumed',
    info2: 'Tech Used : python , raspberry pi 3',
    category: CONSTANTS.OTHER,
    repo: 'https://github.com/atoui-zahreddine/IOT-Based-Monitoring-System-for-Comatose-Patients', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'at.zahreddine@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zahreddine-atoui-609804188/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/atoui-zahreddine',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
