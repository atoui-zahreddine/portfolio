import { nanoid } from 'nanoid';

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
    'https://www.canva.com/design/DAEefxTqqEM/E7V86E1QoDCPytbSYpOptw/view?utm_content=DAEefxTqqEM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Doctor Appointment',
    info: 'Static design from figma community for doctor appointements  ',
    info2: 'Tech Used : React js , Tailwind css',
    category: 'Front End',
    url: 'https://doctor-appoitment-1.netlify.app/',
    repo: 'https://github.com/atoui-zahreddine/doctor-appointment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Business Process Builder',
    info: 'Static design from dribbble for business process builder',
    info2: 'Tech Used : React js , CSS',
    category: 'Front End',
    url: 'https://atoui-zahreddine.github.io/dribbble-template-clone-01/',
    repo: 'https://github.com/atoui-zahreddine/dribbble-template-clone-01', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Online Burger Builder',
    info: 'Online burger builder for Ordering Burger',
    info2: 'Tech Used : React js , CSS ',
    category: 'Front End',
    url: 'https://burger-builder99.netlify.com/',
    repo: 'https://github.com/atoui-zahreddine/burgerBuilderFrontEnd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api.png',
    title: 'API for Online Burger Builder',
    info: 'Online burger builder for Ordering Burger',
    info2: 'Tech Used : Spring Boot , MySql , hibernate , Docker',
    category: 'Back End',
    url: 'https://burger-builder99.netlify.com/',
    repo: 'https://github.com/atoui-zahreddine/burgerBuilderFrontEnd', // if no repo, the button will not show up
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
