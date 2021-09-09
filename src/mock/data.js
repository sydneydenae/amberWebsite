import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amber | Biologist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is, ',
  name: 'Amber',
  subtitle: 'I\'m a Biologist',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'amberPic.png',
  paragraphOne: 'It\'s me, Amber',
  paragraphTwo: 'Yooooooo',
  paragraphThree: 'Wassup',
  resume: 'https://docs.google.com/document/d/1qBmIYGv_wKrbj14XqZviP-GTKM7S69fUdT_TBmpGu9I/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'wise.png',
    title: 'WISE',
    info: 'WISE (Women in Science and Engineering) | 2019 - 2020',
    info2: 'WISE is an innovative, semester-long research and mentoring program at Johns Hopkins University. Here I worked with my mentor, Lin, under the leadership of Dr. Spangler.',
    url: 'https://home.howard.edu/',
  },
  {
    id: nanoid(),
    img: 'GBA.png',
    title: 'Gilman Black Alumni Leadership Institute',
    info: 'Baltimore Leadership Diversity Conference (BSDLC) Planner |2019-2020',
    info2: 'BSDLC is a high school diversity and equity leadership training event that is planned by and led by area high school students. This year I lead a workshop on Black Mental Health for over 1,000+ students',
    url: 'https://gbali.org/',
  },
  {
    id: nanoid(),
    img: 'nape.png',
    title: 'NAPE Conference',
    info: 'Speaker at the National Alliance for Partnerships and Equity (NAPE) Conference | 2018',
    info2: 'I was invited to represent the Girl Scouts at the NAPE conference in Crystal City, VA. I spoke at the Youth Voices Luncheon and shared my experiences as a Girl Scout and my interests in STEM.',
    url: 'https://napequity.org/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'amber.carter@bison.howard.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/amber.carterrr/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/amberCarter123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
