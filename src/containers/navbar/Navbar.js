import { useState } from 'react'
import { Link } from "react-scroll";
import {
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperience,
  bigProjects,
  achievementSection
} from '../../portfolio'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  let sections = [skillsSection, bigProjects, educationInfo, workExperience, achievementSection, socialMediaLinks];
  return (
    <nav className="fixed w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="block items-center text-[1.5rem]">
          <span > &lt; </span>
          <span className="font-augustina">Sarah Perrone</span>
          <span > /&gt;</span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
        </button>
        <div className={`${toggle ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* md:space-x-6 */}
            {sections.map(section => (
              section.display ?
                <button key={section.sectionTitle} className='rounded-lg px-3 py-2 hover:bg-gray-200'>
                  <Link
                    to={section.sectionTitle}
                    activeClass="active"
                    className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-blue-700 md:p-0 dark:text-white" aria-current="page"
                    smooth={true}
                    spy={true}
                    offset={0}
                    duration={500}
                    onClick={() => setToggle(!toggle)}
                  >
                    {section.sectionTitle}
                  </Link>
                </button>
                :
                <></>
            ))
            }
          </div >
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
