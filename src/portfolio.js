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
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Reactjs / Spring / Flask / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OiOTIO5Os3KuOxHthl-k3_TgC4-GWjbk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pedamallu",
  linkedin: "https://www.linkedin.com/in/hemanth-pedamallu/",
  gmail: "hemanthtpg@gmail.com",
  medium: "https://medium.com/@hemanthtpg",
  display: true // Set true to display this section, defaults to false
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firestore",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      date: "Septemcer 2023 – December 2024",
      desc: "Developed a comprehensive web and mobile application to allow users to map, acquire, and process photos.",
      descBullets: [
        "103k+ photos taken during season (2024/02~05) from different fields containing plant metadata.",
        "4 seconds average time for transmitting, processing and storing each photo in the database.",
        "Interface allows user to visualize results after transmission."
      ]
    },
    {
      role: "Software Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "February 2022 – December 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented and updated actual company application modules, by optimizing the database queries thus resulting in at least 4x faster data retrieval."
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
        "Developed a React-based application with a Flask REST API and complex SQL relations to support breeders, researchers, and logistics teams in managing blueberry farm data in real time. Enabled photo-based crop evaluation, automated blueberry counting, and CSV export for traditional analysis, streamlining data collection and decision-making.",
      footerLink: [
        {
          name: "Product Poster (PDF)",
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
          name: "Database Docs",
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
          name: "Lab website",
          url: "https://ieeexplore.ieee.org/document/9788233"
        },
        {
          name: "Photos & Details (PDF)",
          url: "https://drive.google.com/file/d/1sxp7-OULBGgXhulu7D95joP_nkpKjOZ1/view?usp=sharing"
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
          name: "IEEE Publication",
          url: "https://ieeexplore.ieee.org/document/9788233"
        },
        {
          name: "Github",
          url: "https://github.com/pedamallu/Accelerated-and-Refined-VoIP-Spam-Call-Detection-using-HPC"
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
          name: "Research Paper",
          url: "https://docs.google.com/document/d/1lROP7AevkUfstw2A8_mNFkcUXUylY0quSsDql6-iVd8/edit?usp=sharing"
        },
        {
          name: "Github",
          url: "https://github.com/pedamallu/Intrusion-Detection-System-using-Nature-inspired-Metaheuristic-algorithms"
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
  number: "+1 3529997201",
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
