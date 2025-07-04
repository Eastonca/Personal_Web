import emoji from 'react-easy-emoji'
import cppIcon from './assets/skillsIcons/cplusplus.png'
import socketIcon from './assets/skillsIcons/Socket-io.svg'
import unityicon from './assets/skillsIcons/unity.png'
import mongoIcon from './assets/skillsIcons/mongo.svg'
import ubcIcon from './assets/ubcLogo.png'
import chatRoom from './assets/projectIcons/realtimeChatroom.png'
import userAuth from './assets/projectIcons/UserAuth.png'
import movieWeb from './assets/projectIcons/movieWeb.png'
import weatherApp from './assets/projectIcons/weatherApp.png'
import blackJack from './assets/projectIcons/blackjack.png'

const skillsSection = {
  title: 'What I Do',
  subTitle:
    'A creative coder with a love for web apps, game dev, and clean, useful design',
  skills: [
    emoji(
      '💻 Building clean, interactive Front end / User Interfaces for your web applications'
    ),
    emoji(
      '🌐 Creating full stack web applications with Node.js, Express, and MongoDB'
    ),
    emoji('🎮 Designing and developing fun, engaging games in Unity using C#'),
    emoji(
      '⚡ Working with authentication, APIs, and integrating third-party services'
    )
  ],
  softwareSkills: [
    {
      skillName: 'C',
      fontAwesomeClassname: 'fa-regular fa-c'
    },
    {
      skillName: 'C++',
      fontAwesomeClassname: '',
      src: cppIcon
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fa-brands fa-java'
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python'
    },
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5'
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt'
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass'
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react'
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node'
    },
    {
      skillName: 'Socket.io',
      fontAwesomeClassname: '',
      src: socketIcon
    },
    {
      skillName: 'Unity',
      fontAwesomeClassname: '',
      src: unityicon
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: '',
      src: mongoIcon
    }
  ],
  display: true // Set false to hide this section, defaults to true
}

const education = {
  schools: [
    {
      enabled: true,
      logo: ubcIcon,
      schoolName: 'University Of British Columbia',
      major: 'Bachelor of Science in Computer Science',
      time: 'September 2022 - Present',
      description: 'Took many computer science and data science courses',
      courses: [
        'CPSC 110 - Computation, Programs, and Programming',
        'CPSC 121 - Models of Computation',
        'CPSC 210 - Software Construction',
        'CPSC 213 - Introduction to Computer Systems',
        'CPSC 221 - Basic Algorithms and Data Structures'
      ]
    },
    {
      enabled: false,
      logo: '',
      schoolName: '',
      major: '',
      time: '',
      description: ''
    }
  ]
}

const projects = [
  {
    enabled: true,
    name: 'Realtime Chat Room',
    visuals: [chatRoom],
    link: 'https://realtime-chat-web-5v7w.onrender.com',
    github: 'https://github.com/Eastonca/Realtime_Chat_Web',
    toolsUsed: 'Socket.io, NodeJS, ExpressJS, React, JS, CSS, HTML',
    description: [
      'Utilized Socket.IO for realtime, bi-directional communication',
      'Setup server with Node.js and express',
      'Dynamic and component based frontend with react',
      'Deployed a full-stack app on Render'
    ]
  },
  {
    enabled: true,
    name: 'User Auth Backend System',
    visuals: [userAuth],
    link: '',
    github: 'https://github.com/Eastonca/User_Auth_and_Register_Web',
    toolsUsed: 'NodeJS, ExpressJS, Mongoose, MongoDB, JS',
    description: [
      'NodeJS & Express for server-side logic',
      'MongoDB & Mongoose for storing user accounts and roles',
      'Applied bcrypt for secure password hashing',
      'JS for backend logic including async/await and error handling'
    ]
  },
  {
    enabled: true,
    name: 'Movie Cards Search',
    visuals: [movieWeb],
    link: 'https://movie-card-search.onrender.com',
    github: 'https://github.com/Eastonca/Movie_Cards_Website',
    toolsUsed: 'React, TMDB API, JS, CSS, HTML',
    description: [
      'React for building a dynamic, component-based UI',
      'TMDB API for fetching live movie data and posters',
      'JS for handling API calls and state management',
    ]
  },
  {
    enabled: true,
    name: 'Weather Search',
    visuals: [weatherApp],
    link: 'https://weather-web-p9u8.onrender.com',
    github: 'https://github.com/Eastonca/Weather_Web',
    toolsUsed: 'Javascript, WeatherApi, CSS, HTML',
    description: [
      'JavaScript for fetching and displaying live weather data',
      'WeatherAPI for retrieving current weather by city',
      'Dynamic DOM updates to show temperature, humidity, and conditions',
      'CSS & HTML for clean, responsive layout and styling'
    ]
  },
  {
    enabled: true,
    name: 'Blackjack Game',
    visuals: [blackJack],
    link: 'https://blackjack-web.onrender.com',
    github: 'https://github.com/Eastonca/Blackjack_Web',
    toolsUsed: 'Javascript, CSS, HTML',
    description: [
      'JavaScript for game logic, random card drawing, and win conditions',
      'DOM manipulation to update the game state in real time',
      'Audio effects manipulation',
      'CSS & HTML for a clean, responsive game interface'
    ]
  }
]

export { skillsSection, education, projects }
