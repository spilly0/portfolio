
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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionBullets: [
        "hilkasjlkf askfm mei",
        "sdkjf xoel"
      ]
    },
    {
      role: "Lead Mechanical Design Engineer",
      company: "MSB USA",
      logo: "msb.jpeg",
      alt: "MSB Logo",
      backgroundColor: '#038fce',
      date: "August 2021 - March 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionBullets: [
        "hilkasjlkf askfm mei",
        "sdkjf xoel"
      ]
    },
    {
      role: "Mechanical Design Engineer",
      company: "MSB USA",
      logo: "msb.jpeg",
      alt: "MSB Logo",
      backgroundColor: '#038fce',
      date: "June 2019 - March 2021",
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
      title: "Bookbound",
      media: "bookbound.png",
      alt: "Bookbound Image",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: [
        {
          title: "Github",
          link: "https://github.com/grace-shopper-team-butterfly/story-time"
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
