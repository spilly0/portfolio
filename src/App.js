import AboutMe from './containers/aboutMe/AboutMe';
import Navbar from './containers/navbar/Navbar'
import Skills from './containers/skills/Skills';
import Education from './containers/education/Education'
import Experience from './containers/experience/Experience'
import Projects from './containers/projects/Projects'
import {
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperience,
  bigProjects,
  achievementSection
} from './portfolio'

function App() {
  let sections = [skillsSection, bigProjects, educationInfo, workExperience, achievementSection, socialMediaLinks]

  return (
    <div className=' font-montserrat'>
      <div className='dark:bg-background'>
        <Navbar />
        <div className="px-[5%]">
          <AboutMe />
          <Skills />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div >
  );
}

export default App;
