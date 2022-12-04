import ProjectButton from '../../components/projectButton/ProjectButton'
import { bigProjects } from '../../portfolio'

function ProjectCards() {
  const projects = bigProjects.projectsList;
  return (
    <div name={projects.sectionTitle} className="flex flex-wrap justify-around">
      {projects.map((project, index) => (
        <div key={index} className="relative w-full lg:w-1/2  rounded-lg px-3 py-4  ">
          <div className="relative rounded-lg shadow-black shadow-[0_10px_30px_-15px_rgba(0,0,0,/19%)]">
            <div className='py-6 px-6'>
              <img src={project.media} alt={project.alt} />
            </div>
            <div className='text-center px-6 py-4'>
              <h5 className='text-[1.375rem] pb-4'>{project.title}</h5>
              <p className='text-subtitle'>{project.description}</p>
              <div className='py-2'>
                {project.buttons.map((button, indexB) => (
                  <ProjectButton key={indexB} title={button.title} link={button.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards;
