import {
  skillsSection
} from '../../portfolio'
import SkillsList from '../../components/skillsList/SkillsList'
import { useLottie } from "lottie-react";
import womanSetting from "../../assets/animations/womanSetting.json";

function Skills() {
  const options = {
    animationData: womanSetting,
    loop: true,
    style: {
      width: '50%'
    }
  };
  const { View } = useLottie(options);
  return (
    <div name={`${skillsSection.sectionTitle}`} className="w-full flex flex-wrap py-5" >
      <div className="w-full flex justify-center items-center p-2 md:w-1/2">
        {View}
      </div>
      <div className="w-full flex items-center md:w-1/2">
        <div>
          <h1 className="text-[56px] dark:text-white">{skillsSection.title}</h1>
          <p className="leading-[23px] text-[19px] uppercase py-4 dark:text-white">{skillsSection.subtitle}</p>
          <SkillsList />
        </div>
      </div>
    </div >
  )
}

export default Skills
