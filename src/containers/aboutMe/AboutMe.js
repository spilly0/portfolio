import { introduction } from '../../portfolio'
import emoji from 'react-easy-emoji'

function AboutMe() {
  return (
    <div className="w-full flex flex-wrap-reverse" style={{ paddingTop: "130px" }}>
      <div className="w-full flex items-center md:w-1/2">
        <div className='font-montserrat'>
          <h1
            className="flex text-[70px]"
          >
            {" Hi, I'm "}
            {introduction.firstName}{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <p
            className="text-[30px] leading-[40px]"
          >
            {introduction.subTitle}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:w-1/2">
        <iframe src="https://embed.lottiefiles.com/animation/83434"></iframe>
      </div>
    </div >
  )
}

export default AboutMe
