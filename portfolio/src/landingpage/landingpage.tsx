import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./landingpage.css"
import Project from "../project/Project"
export default function LandingPage({element}: {element: React.MutableRefObject<HTMLDivElement | null>}){

  return (
    <div className="px-28 py-10 h-full justify-between" style={{backgroundColor:"beige"}}>



      <div style={{width:'fit-content'}} className='border'>
        {/* Name */}
        <div className="flex items-center">
          <div className="typing-effect overflow-hidden">
            <h1 className="text-5xl myname my-5">Hi, I am Zainan Ali. </h1>
          </div>
          <span className="fade-in fade-in-delay text-2xl mx-5"> - Web Developer</span>
        </div>

        {/* Description */}
        <span className="fade-in mx-5 text-2xl" style={{width:'300px'}}>
          ~ As a web developer, I have hands on experience with various web technologies.
        </span>

        {/* Contact */}
        <div className="my-5 fade-in flex justify-center items-center flex-col">
          <div className="w-full">
            <ul className=" my-4 text-2x1xl">
              <li>
                <div className="flex w-full justify-between ">
                <span className="font-bold">zainanzaher09@gmail.com</span>
                <span className="font-bold flex items-center flex-col">+351 920-433-306
                  <div className="my-5">
                  <span className='mx-5 text-4xl'><FontAwesomeIcon icon={faLinkedin} /></span>
                  <span className='mx-5 text-4xl'><FontAwesomeIcon icon={faGithub} /></span>
                  </div>
                </span>
                <span className="font-bold">Lisbon, Portugal</span>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* Hard Skills Section */}
        <div className="fade-in text-2xl flex flex-col items-center w-full border">
          <h3 className="text-2xl my-3"><span className="font-bold">H</span>ard Skills</h3>
          <span style={{backgroundColor: "#81b29a"}} className=" font-bold tracking-wide py-2 px-3 text-white stroked-text"> HTML, CSS, Javascript, Ruby on Rails API, React, Redux and SQL.</span>
        </div>
      </div>


      <div className='my-28 border fade-in'>
        <h4 className='text-center text-4xl font-bold'>Projects</h4>
        <div>
          <Project width="500px" stack={["./stack/css.svg","./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg"]} pictures= {["./timemachines/TimeMachine.png", "./timemachines/TimeMachine2.png", "./timemachines/TimeMachine3.png", "./timemachines/TimeMachine4.png", "./timemachines/TimeMachine5.png"]}/>
        </div>
      </div>
    </div>
  )
}
