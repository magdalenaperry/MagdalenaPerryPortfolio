// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Magdalena",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a paragraph about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    'I am a twenty-seven year old woman living in Charlotte, North Carolina I am an alumna of Salem College, where I earned degrees in Biology and Political Science. I taught high school biology and environmental sciences in Winston Salem, NC for four years. Coding encompasses all the things I love: puzzles, creative problem solving, modern art, design, and attention to detail. My time away from learning code includes playing golf, reading, cooking, baking, gardening, and playing Destiny 2. I am currently reading "Clash of Kings" and "The Sea is My Brother" and watching Archer.'
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node-js",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Full Stack Projects";


// must add new lines of informations in Works.js
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Vita Amet",
    skills: ["React, JS, ApolloQL"],
    url: "https://github.com/DavidAyl/vita-amet",
    deployUrl: "https://vita-amet-2022-05-07.herokuapp.com/",
    description: "Vita Amet is a full stack, mobile-first application with user authentication. This e-commerce application allows users to sign up or login and add rental outdoorsy items to cart and checkout using Stripe."
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Chiron Portal",
    skills: ["JS, MVC, Express, Handlebars"],
    url: "https://github.com/magdalenaperry/brute-force-alpha-project",
    deployUrl: "https://polar-peak-28753.herokuapp.com/",
    description: "Chiron is a full stack application created with patient and physician interaction in mind. The application has a user authentication system that allows patients to sign up or login and view information stored within the patient portal and also schedule an appointment."
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Cosmic Dust",
    skills: ["HTML, CSS, JS, Bootstap, APIs"],
    url: "https://github.com/magdalenaperry/nasa-space-things",
    deployUrl: "https://magdalenaperry.github.io/nasa-space-things/",
    description: "Cosmic Dust is a full stack application created for space enthusiasts. The application allows users to view NASA’s picture of the day, track where the International Space Station is, and view a list of Nearest Earth Objects’ data."
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Taqueria Los Amigos",
    skills: ["HTML, CSS, JS, MYSQL, Sequelize, MVC, Express"],
    url: "https://github.com/magdalenaperry/losamigos-taqueria",
    deployUrl: "https://morning-tor-09427.herokuapp.com/",
    description: "Los Amigos is a full stack, mobile first, responsive web application. The application was built for clients of Los Amigos Taqueria in Mount Airy, NC to view the business’ menu and contact information. "
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Tech Blog",
    skills: ["HTML, CSS, JS, MYSQL, Sequelize, MVC, Express"],
    url: "https://github.com/magdalenaperry/mageltron-tech-blog",
    deployUrl: "https://safe-peak-57293.herokuapp.com/",
    description: "Tech Blog is a full stack, mobile first, responsive web application made for tech enthusiasts. The application has a user authentication system that allows bloggers to sign up or login, view and create posts, as well as comment on existing posts."
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Weather Dashboard",
    skills: ["HTML, CSS, JS, API"],
    url: "https://github.com/magdalenaperry/weather-channel",
    deployUrl: "https://magdalenaperry.github.io/weather-channel/",
    description: "The Weather Dashboard is a front-end application designed to give users access to weather data from different cities worldwide. The weather information displayed on the app comes from Open Weather."
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Back-end Projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Employee Tracker",
    skills: ["JavaScript, MYSQL, Inquirer"],
    url: "https://github.com/magdalenaperry/mags-employee-tracker",
    description: "The Employee Team Generator is a back-end application designed to accept information about employees through the terminal and generate front-end styled pages populating the information."
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "README.md Generator",
    skills: ["JavaScript, Inquirer"],
    url: "https://github.com/magdalenaperry/read-me-gen",
    description: "The README generator is a back-end application designed for web developers to create consistent README’s. The application accepts information through the terminal and creates a styled README.md file that can be copied into the developer’s repository."
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "E-commerce DB",
    skills: ["JavaScript, MYSQL, Express"],
    url: "https://github.com/magdalenaperry/magdalenas-boutique",
    description: "The e-commerce DB is a back-end application designed to store product data for: prices, categories, tags, and ids. The application can be built upon to create a full stack e-commerce site. "
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact Me";
const contact = {
  pitch:"Reach out or save my resume.",
  copyright: "",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/magdalenaperry",
  instagram: "https://instagram.com/mags.perr",
  linkedin: "https://www.linkedin.com/in/magdalena-perry/",
  resume: "../assets/images/magdalena-perry-resume.pdf",
  email: "mageltron@gmail.com"
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
