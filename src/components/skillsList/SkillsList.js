import {
  skillsSection
} from '../../portfolio'

function SkillsList() {
  const skills = skillsSection.skillsList
  return (
    <div className=''>
      <ul className="text-5xl text-center list-none">
        {skills.map(skill => (
          <li
            key={skill.skillName}
            className="inline-block mx-[20px] group"
          >
            <i className={`${skill.icon} text-subtitle group-hover:text-textHover`}></i>
            <p className="text-xs dark:text-subtitle group-hover:text-textHover">{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList
