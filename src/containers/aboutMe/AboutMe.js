import { introduction } from '../../portfolio'
import emoji from 'react-easy-emoji'
import { useLottie } from "lottie-react";
import womanEngine from "../../assets/animations/womanEngine.json";

function AboutMe() {
  const options = {
    animationData: womanEngine,
    loop: true,
    style: {
      width: '50%'
    }
  };
  const { View } = useLottie(options);

  return (
    <div className="w-full flex flex-wrap-reverse" style={{ paddingTop: "130px" }}>
      <div className="w-full flex items-center md:w-1/2">
        <div className='font-montserrat'>
          <h1
            className="flex text-[70px] dark:text-white"
          >
            {" Hi, I'm "}
            {introduction.firstName}{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <p
            className="text-[30px] leading-[40px] text-subTitle dark:text-white"
          >
            {introduction.subTitle}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:w-1/2">
        {View}
      </div>
    </div >
  )
}

export default AboutMe
