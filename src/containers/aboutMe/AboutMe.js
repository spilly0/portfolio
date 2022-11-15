import { introduction } from '../../portfolio'
import emoji from 'react-easy-emoji'

function AboutMe() {
  return (
    <div className="w-full flex flex-wrap-reverse" style={{ paddingTop: "130px" }}>
      <div className="w-full flex items-center md:w-1/2">
        <div>
          <h1
            className="flex"
          >
            {" Hi, I'm "}
            {introduction.name}{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <p
            className=""
          >
            {introduction.subTitle}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:w-1/2">
        <img src="logo192.png" alt="" />
      </div>
    </div>
  )
}

export default AboutMe
