import emoji from 'react-easy-emoji'
import cppIcon from './assets/skillsIcons/cplusplus.png'
import socketIcon from './assets/skillsIcons/Socket-io.svg'
import unityicon from './assets/skillsIcons/unity.png'
import mongoIcon from './assets/skillsIcons/mongo.svg'
import ubcIcon from './assets/ubcLogo.png'
import chatRoom from './assets/projectIcons/realtimeChatroom.png'

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
      description: '',
    }
  ]
}

const projects = [
    {
        enabled: true,
        name: "Realtime Chat Room",
        visuals: [chatRoom],
        link: "https://realtime-chat-web-5v7w.onrender.com",
        github: "https://github.com/Eastonca/Realtime_Chat_Web",
        toolsUsed: "Socket.io, NodeJS, ExpressJS, React, JS, CSS, HTML",
        description: [
            "Utilized Socket.IO for realtime, bi-directional communication",
            "Built with NodeJS and ExpressJS",
            "Styled with plain CSS and HTML",
            "Deployed on Render"
        ]
    },
    {
        enabled: true,
        name: "User Auth Backend System with MongoDB",
        visuals: "",
        link: "",
        github: "",
        toolsUsed: "NodeJS, ExpressJS, Mongoose, MongoDB",
        description: "", 
    },
    {
        enabled: true,
        name: "Movie Cards Search",
        visuals: "",
        link: "",
        github: "",
        toolsUsed: "React, TMDB API, JS, CSS, HTML",
        description: "", 
    },
    {
        enabled: true,
        name: "Weather Search",
        visuals: "",
        link: "",
        github: "",
        toolsUsed: "Javascript, WeatherApi, CSS, HTML",
        description: "", 
    },
    {
        enabled: true,
        name: "Blackjack Game",
        visuals: "",
        link: "",
        github: "",
        toolsUsed: "Javascript, CSS, HTML",
        description: "", 
    },
]


export { skillsSection, education, projects }
