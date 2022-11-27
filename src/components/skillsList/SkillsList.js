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
            <i className={`${skill.icon} text-zinc-400 group-hover:text-violet-600`}></i>
            <p className="text-xs group-hover:text-violet-600">{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList
