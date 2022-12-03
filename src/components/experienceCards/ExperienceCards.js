import { workExperience } from '../../portfolio'
function ExperienceCards() {
  const experiences = workExperience.experience;
  return (
    <div className="flex flex-wrap justify-around">
      {experiences.map((experience, index) => (
        <div key={index} className="relative w-1/2 lg:w-1/3 rounded-t-lg px-3 py-4  ">
          <div className="relative rounded-t-lg shadow-black shadow-[0_10px_30px_-15px_rgba(0,0,0,/20%)] rounded-lg">
            <div className='flex justify-center items-center rounded-t-lg h-[11rem]' style={{ backgroundColor: experience.backgroundColor }}>
              <div className='w-full h-full rounded-t-lg' style={{ background: 'linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.2))', filter: 'blur(10px)' }}></div>
              <div className='absolute h-[5rem]'>
                <h5 className='text-[25px] text-white'>{experience.company}</h5>
              </div>
              <img className='absolute rounded-[50%] top-[7rem] w-[8rem] h-[8rem] shadow-[0_0.5rem_1rem_rgba(0_0_0_/30%)]' src={experience.logo} alt={experience.alt} />
            </div>
            <div className='mt-[2rem] p-[1.5rem] text-center'>
              <h4 className='text-[25px] font-[500] pt-[1.5rem] dark:text-white'>{experience.role}</h4>
              <h5 className='text-[20px] font-[500] pt-[1rem] dark:text-white'>{experience.date}</h5>
              <p className='text-subTitle font-[300] pt-[1.5rem]'>{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceCards;
