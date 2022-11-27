import {
  skillsSection
} from '../../portfolio'
import SkillsList from '../../components/skillsList/SkillsList'

function Skills() {
  return (
    <div name={`${skillsSection.sectionTitle}`} className="w-full flex flex-wrap py-10" >
      <div className="w-full flex justify-center p-2 md:w-1/2">
        {/* <img src="logo192.png" alt="programmer" /> */}
        <iframe src="https://embed.lottiefiles.com/animation/83439"></iframe>
      </div>
      <div className="w-full flex items-center md:w-1/2">
        <div>
          <h1 className="text-[56px]">{skillsSection.title}</h1>
          <p className="leading-[23px] text-[19px] uppercase  py-4">{skillsSection.subtitle}</p>
          <SkillsList />
        </div>
      </div>
    </div >
  )
}

export default Skills
