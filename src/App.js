import AboutMe from './containers/aboutMe/AboutMe';
import Navbar from './containers/navbar/Navbar'
import Skills from './containers/skills/Skills';
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
    <div className="bg-violet-300 h-screen">
      <Navbar />
      <div className="px-8">
        <AboutMe />
        <Skills />
      </div>
    </div >
  );
}

export default App;
