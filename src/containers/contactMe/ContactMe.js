import SocialMedias from "../../components/socialMedias/SocialMedias"
import { socialMediaLinks } from '../../portfolio'

function ContactMe() {
  return (
    <div name={socialMediaLinks.sectionTitle} className="w-full dark:text-white py-5">
      <h1 className="text-[40px] pb-4">Reach Out to me!</h1>
      <div className="w-full flex flex-wrap-reverse">
        <div className="w-full flex md:w-2/3">
          <div className="text-center md:text-left dark:text-white">
            <p className="text-subtitle py-4 text-[21px]">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
            </p>
            <p className="pr-3 text-[20px] py-4"><i className="fas fa-map-marker-alt"></i> NYC Area</p>
            <p className="text-[20px] py-2">Open to opportunities: Yes</p>
            <SocialMedias />
          </div>
        </div>
        <div className="w-full flex justify-center p-2 md:w-1/3 ">
          <img className="rounded-[50%] max-w-[250px] border-8 border-textHover" src="sarah.jpg" alt="Sarah Profile Pic" />
        </div>
      </div>
    </div>
  )
}

export default ContactMe
