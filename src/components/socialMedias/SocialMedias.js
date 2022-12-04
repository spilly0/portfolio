import {
  socialMediaLinks
} from '../../portfolio'

function SocialMedias() {

  return (
    <div className='block text-[2em] my-4'>
      <a
        className="m-[5px]"
        href={socialMediaLinks.github}
      >
        <i className="fab fa-github relative bg-github hover:bg-github h-[2.6rem] w-[2.6rem] rounded-[2.6rem] leading-[2.6rem] text-[1.3rem] text-center" style={{ color: "white", width: "2.6rem" }}></i>
        <span></span>
      </a>
      <a
        className="m-[5px]"
        href={socialMediaLinks.linkedIn}
      >
        <i className="fab fa-linkedin relative bg-linkedIn hover:bg-github h-[2.6rem] w-[2.6rem] rounded-[2.6rem] leading-[2.6rem] text-[1.3rem] text-center" style={{ color: "white" }}></i>
        <span></span>
      </a>
      <a
        className="m-[5px]"
        href={socialMediaLinks.gmail}
      >
        <i className="fa fa-envelope relative bg-gmail hover:bg-github h-[2.6rem] w-[2.6rem] rounded-[2.6rem] leading-[2.6rem] text-[1.3rem] text-center" style={{ color: "white" }}></i>
        <span></span>
      </a>
    </div>
  )
}

export default SocialMedias
