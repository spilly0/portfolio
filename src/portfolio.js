import emoji from "react-easy-emoji";

const splashScreen = {};

const animations = {
  aboutMe: {
    image: "woman-programmer.png",
    altTag: "woman programmer"
  }
}

const introduction = {
  display: true,
  name: "Sarah Perrone",
  firstName: "Sarah",
  subtitle:
    "A passionate Full Stack Software Developer 🚀 with experience in building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
}

const socialMediaLinks = {
  display: true,
  sectionTitle: "Contact Me",
  github: "https://github.com/spilly0",
  linkedIn: "https://www.linkedin.com/in/sarah-perrone/",
  gmail: "mailto:sarahperrone96@gmail.com"
}

const skillsSection = {
  display: true,
  sectionTitle: "Skills",
  title: "What I do",
  subtitle: "Passionate full stack developer who is eager to learn new tech!",
  skillsList: [
    {
      skillName: "JavaScript",
      icon: "fab fa-js"
    },
    {
      skillName: "HTML-5",
      icon: "fab fa-html5"
    },
    {
      skillName: "CSS",
      icon: "fab fa-css3-alt"
    },
    {
      skillName: "React",
      icon: "fab fa-react"
    },
    {
      skillName: "Node.js",
      icon: "fab fa-node"
    },
    {
      skillName: "Firebase",
      icon: "fas fa-fire"
    },
    {
      skillName: "React Native",
      icon: "fab fa-react"
    }
  ],
  bullets: [
    emoji(
      "⚡ Experience: Sequelize, Webpack, Bootstrap, Redux, Git, Babel, and Express"
    ),
    emoji("⚡ Some experience: Tensorflow, Python, NativeBase, and Material UI")
  ]
}

const educationInfo = {
  display: true,
  sectionTitle: "Education",
  education: [
    {
      school: "The Grace Hopper Program at Fullstack Academy",
      logo: "gh.png",
      logoAlt: "Grace Hopper Program Logo",
      degree: "Certificate in Fullstack Web Development",
      duration: "March 2022 - July 2022",
      description: "A 17-week immersive software engineering program based in New York City, centered on fullstack JavaScript development, including Node.js, Express, Sequelize ORM for PostgreSQL databases, React and Redux; along with HTML, CSS, and CS fundamentals."
    },
    {
      school: "Wichita State University",
      logo: "wsu.png",
      logoAlt: "Wichita State University Logo",
      degree: "Bachelor of Science in Biomedical Engineering",
      duration: "August 2015 - May 2019",
      description: ""
    }
  ]
}

const workExperience = {
  display: true,
  sectionTitle: "Experience",
  experience: [
    {
      role: "Mentor",
      company: "Fullstack Academy",
      logo: "fa.png",
      alt: "Fullstack Logo",
      backgroundColor: '#ed1f24',
      date: "November 2022 - Present",
      description: "",
      descriptionBullets: [
        "Provide individualized student support during class sessions and outside class in a timely manner.",
        "Help students connect content to the real world by sharing industry insights and professional experience.",
        "Evaluate student performance and progress based on course deliverables, while providing feedback."
      ]
    },
    {
      role: "Lead Mechanical Design Engineer",
      company: "MSB USA",
      logo: "msb.jpeg",
      alt: "MSB Logo",
      backgroundColor: '#038fce',
      date: "August 2021 - March 2022",
      description: "",
      descriptionBullets: [
        "Guided 4 engineers in designing products that satisfied design standards and customer requirements.",
        "Led meetings, prioritizing and managing team workflow, which ensured accurate designs and scheduling.",
        "Managed client relationships to evaluate needs, delivering products that were manufacturable, cost efficient, and aligned with client needs."
      ]
    },
    {
      role: "Mechanical Design Engineer",
      company: "MSB USA",
      logo: "msb.jpeg",
      alt: "MSB Logo",
      backgroundColor: '#038fce',
      date: "June 2019 - March 2021",
      description: "",
      descriptionBullets: [
        "Designed and drafted aircraft interiors using CATIA V5 and SolidWorks in accordance with design specifications, airworthiness standards, and customer requirements.",
        "Created tools and documentation to improve processes. Such as preparing supplemental materials on the client’s PLM (Product Lifecycle Management) system to increase efficiency of the release process."
      ]
    }
  ]
}

const bigProjects = {
  display: true,
  sectionTitle: "Projects",
  projectsList: [
    {
      title: "Bookbound",
      media: "bookbound.png",
      alt: "Bookbound Image",
      description: "Bookbound is a mobile book-tracking app designed by and for avid readers. Created with a focus on design and the user experience, aimed at providing a fun and easy way for users to track the books they have read, are currently reading, or want to read.",
      buttons: [
        {
          title: "Demo",
          link: "https://www.youtube.com/watch?v=7trYUsyBrX0"
        },
        {
          title: "Github",
          link: "https://github.com/team-sweet-potato/bookbound"
        }
      ]
    },
    {
      title: "Story Time",
      media: "storytime.png",
      alt: "Story Time Image",
      description: "An e-commerce website for children's books, that provides a user experience for guests, authorized users, and admins.",
      buttons: [
        {
          title: "Github",
          link: "https://github.com/grace-shopper-team-butterfly/story-time"
        }
      ]
    },
    {
      title: "Portfolio Website",
      media: "portfolioWeb.png",
      alt: "Portfolio Website Image",
      description: "A portfolio webiste created to display my skills, projects, and have fun!",
      buttons: [
        {
          title: "Github",
          link: "https://github.com/spilly0/portfolio"
        }
      ]
    }
  ]
}

const achievementSection = {
  display: true,
  sectionTitle: "Achievements",
  achievementsList: [
    {
      title: 'lorem ipsum',
      description: 'lorem ipsum'
    }
  ]
}

export {
  introduction,
  animations,
  splashScreen,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperience,
  bigProjects,
  achievementSection
}
