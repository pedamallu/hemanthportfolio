/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hemanth Pedamallu",
  title: "Hi, I'm Hemanth",
  subTitle: emoji(
    //"a results-driven software engineer with a Master’s from the University of Florida 🎓 and a strong track record in developing and deploying scalable applications 🚀. I’ve transformed complex challenges into high-performance solutions—such as developing a web application that streamlined geo-located gene data processing and cut manual work by 10 hours per week ⏱️, and optimizing microservices at Capgemini to boost responsiveness and reliability ⚡."
    "a Software Engineer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OiOTIO5Os3KuOxHthl-k3_TgC4-GWjbk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hemanth-pedamallu/",
  leetcode: "https://leetcode.com/u/HemanthPedamallu/",
  github: "https://github.com/pedamallu",
  gmail: "hemanthtpg@gmail.com",
  medium: "https://medium.com/@hemanthtpg",
  display: true // Set true to display this section, defaults to false
};
//About Section
const about = {
  description:
    "I’m a results-driven software engineer with a Master’s from the University of Florida 🎓 and hands-on experience in developing and deploying scalable applications 🚀. I transform complex challenges into scalable, high-performance solutions—like migrating a 100K-record system that cut data processing by 10 hours weekly ⏱️, and optimizing microservices for enhanced responsiveness ⚡. My expertise in Java, Python, and modern web frameworks fuels my passion for writing clean, efficient code that drives measurable business impact."
};
// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "SOFTWARE DEVELOPER WHO WANTS TO EXPLORE NEW TECH",
  skills: [
    emoji(
      "⚡ Design APIs using Spring Boot and Flask for seamless data interaction with third-party services like Okta for identity and access management, Spring Security ."
    ),
    emoji("⚡ Develop dynamic and user-friendly web interfaces with React. "),
    emoji(
      "⚡ Create mobile applications with Flutter, supporting offline data collection and synchronization."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firestore",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universityof Florida",
      logo: require("./assets/images/ufLogo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024",
      //desc: "Working as a Graduate Student Assistant at the UF Blueberry Laboratories.",
      desc: "GPA: 3.77/4.0",
      descBullets: [
        "Relevant Coursework: Analysis of Algorithms, Advanced Data Structures, Database Management System, Computer Networks, Software Engineering, Distributed Operating System Principles, Agile Project Management."
      ]
    },
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/buLogo.gif"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - May 2022",
      //desc: "Ranked top 10% in the program. ",
      desc: "GPA: 3.66/4.0",
      descBullets: [
        "Collaborated with university IT team to build a virtual security network in Cisco Packet Tracer.",
        "Led and excelled in multiple hackathons and coding competitions, showcasing strong problem-solving and teamwork."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "University of Florida",
      companylogo: require("./assets/images/ufLogo.jpeg"),
      date: "September 2023 – December 2024",
      //desc: "Developed a comprehensive web and mobile application to allow users to map, acquire, and process photos.",
      descBullets: [
        "Launched a React web app with Spring microservices for core APIs and a Flask API for ML functions to analyze geo-located gene data; replaced CSV workflows, saving 10 hrs/week.",
        "Designed and hosted a PostgreSQL database on Amazon Aurora for 100K+ plant records, using indexing and optimized joins for better performance.",
        "Engineered a Flutter app for offline data collection, syncing with Firestore and PostgreSQL; achieved 4 sec/photo processing.",
        "Deployed the application on a Linux server with containerization to optimize resource usage.",
        "Built a Qt (C++) app for a Raspberry Pi 5-based fruit quality device using WiringPi for sensor communication."
      ]
    },
    {
      role: "Software Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "February 2022 – December 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a Token Bucket–based rate limiter used across 15+ microservices.",
        "Integrated OAuth 2.0 with PKCE to enable Single Sign-On for the application.",
        "Implemented 10+ features in Spring Boot, optimizing SQL queries for high traffic and responsiveness.",
        "Enhanced front-end user interface with React.js, improving client-side experiences to create end-user-centric solutions.",
        "Tested features using 50 plus JUnit/Mockito test-cases and analyzed the application for improvements with SonarQube.",
        "Deployed on Amazon ECS with AWS Fargate for zero downtime and fault tolerance.",
        "Utilized Agile methodologies to manage tasks and sprints, fostering effective cross-functional collaboration."
      ]
    },
    {
      role: "Trainee Software Engineer",
      company: "Mirra Healthcare",
      companylogo: require("./assets/images/mirraLogo.jpg"),
      date: "August 2021 – February 2022",
      desc: "Developed a prototype of health insurance claim application, a clone of company product in ASP. NET MVC architecture with Microsoft SQL server.",
      descBullets: [
        "Implemented and updated actual company application modules, by optimizing the database queries thus resulting in at least 4x faster data retrieval."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE COMPLETED",
  projects: [
    {
      image: require("./assets/images/BBPWebsite.png"),
      projectName: "BlueYield: Collaborative Farm Data Platform",
      projectDesc:
        "Developed a React-based application with a Flask REST API and complex SQL relations, integrating a Flutter application for offline data collection, to support breeders, researchers, and logistics teams in managing blueberry farm data in real time. Enabled photo-based crop evaluation, automated blueberry counting, and CSV export for traditional analysis.",
      footerLink: [
        {
          name: "Photos & Details (PDF)",
          url: "https://drive.google.com/file/d/18i2bUZuyPoT420AXiWYqw6qEHYSXSaDf/view?usp=sharing"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GrowthChamber UI.png"),
      projectName: "Growth Chamber Control & Monitoring System",
      projectDesc:
        "Developed a Qt (C++) desktop application for remote control and real-time monitoring of automated growth chambers via UDP communication. Integrated with a Raspberry Pi for sensor data acquisition, actuator control, and remote access, enabling researchers to optimize environmental conditions for accelerated blueberry breeding.",
      footerLink: [
        {
          name: "Photos & Details (PDF)",
          url: "https://drive.google.com/file/d/1TZpC4Vx4XL0HBy4hzpaPGSqysBmHIxEO/view?usp=sharing"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/airline_analysis.jpeg"),
      projectName: "Airline Trend Analysis",
      projectDesc:
        "Analyze 19 years of US airline delays! This project explores how factors like COVID-19, weather, and customer satisfaction affect delays using extensive public datasets and perform complex SQL trend queries. It features an interactive web app for visualizing trends and make informed decisions.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/pedamallu/airline_analysis"
        },
        {
          name: "Database Document (PDF)",
          url: "https://docs.google.com/document/d/11Syho2vVjgy0tHLVi8-0XyH38O8o0VRF/edit?usp=sharing&ouid=114860688189319378331&rtpof=true&sd=true"
        }
      ]
    },
    {
      image: require("./assets/images/Conveyor Device.jpg"),
      projectName: "Ground Truth Data Generation",
      projectDesc:
        "Developed a conveyor system for precise dataset generation in agricultural machine learning. Built a real-time berry detection and classification module using computer vision to track maturity levels based on color and size. Designed an on-screen Qt application interface to control the device and monitor the data collection process.",
      footerLink: [
        {
          name: "Photos & Details (PDF)",
          url: "https://drive.google.com/file/d/1sxp7-OULBGgXhulu7D95joP_nkpKjOZ1/view?usp=sharing"
        },
        {
          name: "Lab website",
          url: "https://ieeexplore.ieee.org/document/9788233"
        }
      ]
    },
    {
      image: require("./assets/images/VOIPDetection.png"),
      projectName: "VOIP Spam Call Detection",
      projectDesc:
        "Detect spam calls from the SIP responses with reduction in detection time using HPC libraries.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/pedamallu/Accelerated-and-Refined-VoIP-Spam-Call-Detection-using-HPC"
        },
        {
          name: "IEEE Publication",
          url: "https://ieeexplore.ieee.org/document/9788233"
        }
      ]
    },
    {
      image: require("./assets/images/IDS results.png"),
      projectName:
        "Intrusion Detection System using Nature-inspired Metaheuristic algorithms",
      projectDesc:
        "Developed an Intrusion Detection System (IDS) leveraging nature-inspired metaheuristic algorithms to enhance cybersecurity threat detection. Applied optimization techniques to efficiently classify network intrusions, improving detection accuracy and reducing false positives. Implemented using Python, machine learning models, and feature selection techniques for real-time network security monitoring.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/pedamallu/Intrusion-Detection-System-using-Nature-inspired-Metaheuristic-algorithms"
        },
        {
          name: "Research Paper ",
          url: "https://drive.google.com/file/d/1FKYtQXYMZcYSrEvEztSBen6JgjnW9KxF/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Other Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Some of My Learnings & Journey in Software Development.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have any open position, discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 352-999-7201",
  email_address: "hemanthtpg@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  about,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
