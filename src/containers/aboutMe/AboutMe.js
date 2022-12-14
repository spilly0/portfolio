import { introduction } from '../../portfolio'
import emoji from 'react-easy-emoji'
import { useLottie } from "lottie-react";
import womanEngine from "../../assets/animations/womanEngine.json";
import SocialMedias from "../../components/socialMedias/SocialMedias"

function AboutMe() {
  const options = {
    animationData: womanEngine,
    loop: true,
    style: {
      width: '50%'
    }
  };
  const { View } = useLottie(options);
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            className="text-[30px] leading-[40px] text-subtitle dark:text-white"
          >
            {introduction.subtitle}
          </p>
          <SocialMedias />
          <button onClick={() => openInNewTab('https://drive.google.com/file/d/1zePzsmXSMywmoRAvbfZg7pl5ZXG9REl_/view?usp=sharing')} type="button" className="hover:bg-white hover:text-purple hover: px-3 py-3 rounded-lg bg-purple text-white border-[1px] border-purple my-4 mx-2">SEE MY RESUME</button>
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:w-1/2">
        {View}
      </div>
    </div >
  )
}

export default AboutMe
