import ProjectCards from '../../components/projectCards/ProjectCards'
import { bigProjects } from '../../portfolio'

function Projects() {
  return (
    <div name={bigProjects.sectionTitle} className="w-full dark:text-white py-5">
      <div className="">
        <h1 className="text-[56px] pb-4">Projects</h1>
      </div>
      <ProjectCards />
    </div>
  )
}

export default Projects
