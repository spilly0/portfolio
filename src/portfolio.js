
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
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
}

const socialMediaLinks = {
  display: true,
  sectionTitle: "Contact Me",
  github: "https://github.com/spilly0",
  linkedIn: "https://www.linkedin.com/in/sarah-perrone/",
  gmail: "sarahperrone96@gmail.com"
}

const skillsSection = {
  display: true,
  sectionTitle: "Skills",
  title: "What I do",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
  ]
}

const educationInfo = {
  display: true,
  sectionTitle: "Education",
  education: [
    {
      school: "Wichita State University",
      logo: "",
      degree: "Bachelor of Science in Biomedical Engineering",
      duration: "August 2015 - May 2019",
      description: ""
    },
    {
      school: "The Grace Hopper Program at Fullstack Academy",
      logo: "",
      degree: "Certificate in Fullstack Web Development",
      duration: "March 2022 - July 2022",
      description: "A 17-week immersive software engineering program based in New York City, centered on fullstack JavaScript development, including Node.js, Express, Sequelize ORM for PostgreSQL databases, React and Redux; along with HTML, CSS, and CS fundamentals."
    }
  ]
}

const workExperience = {
  display: true,
  sectionTitle: "Experience",
  experience: [
    {
      role: "Mechanical Design Engineer",
      company: "MSB USA",
      logo: "",
      date: "August 2021 - March 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionBullets: [
        "hilkasjlkf askfm mei",
        "sdkjf xoel"
      ]
    }
  ]
}

const bigProjects = {
  display: true,
  sectionTitle: "Projects",
  projectsList: [
    {
      title: "bookbound"
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
