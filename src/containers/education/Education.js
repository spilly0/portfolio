import {
  educationInfo
} from '../../portfolio'

function Education() {
  let educationList = educationInfo.education;
  return (
    <div name={educationInfo.sectionTitle} className="w-full dark:text-white py-5">
      <div>
        <h1 className="text-[56px] pb-4">Education</h1>
      </div>
      {educationList.map(education => (
        <div className="flex flex-col items-center sm:flex-row sm: py-4">
          <div className='block pr-4'>
            <img className='w-[100px] min-w-[100px]' src={education.logo} alt={education.logoAlt} />
          </div>
          <div className='text-center sm:text-left'>
            <h5 className="text-[28px]">{education.school}</h5>
            <div>
              <h5>{education.degree}</h5>
              <p>{education.duration}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Education
