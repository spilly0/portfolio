import ExperienceCards from '../../components/experienceCards/ExperienceCards'
import { workExperience } from '../../portfolio'

function Experience() {
  return (
    <div name={workExperience.sectionTitle} className="w-full dark:text-white py-5">
      <div className="">
        <h1 className="text-[56px] pb-4">Experience</h1>
      </div>
      <ExperienceCards />
    </div>
  )
}

export default Experience;
