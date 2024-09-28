import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./landingpage.css"
import Project from "../project/Project"
export default function LandingPage({element}: {element: React.MutableRefObject<HTMLDivElement | null>}){

  return (
    <div className="h-full flex justify-center flex-col px-28">



      <div style={{width:'fit-content'}} className=''>
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
        <div className="fade-in text-2xl flex flex-col w-full ">
          <h3 className="text-2xl my-3"><span className="font-bold">T</span>ech Stack</h3>
          <span style={{backgroundColor: "#81b29a"}} className=" font-bold tracking-wide py-2 px-3 text-white stroked-text"> HTML, CSS, Javascript, Typescript, Ruby on Rails API, React, Redux and PostgreSQL/MySQL.</span>
        </div>
      </div>


      <div className='  fade-in'>
        <h4 className='text-center text-4xl font-bold my-5'>Projects</h4>
        <div className="flex justify-between">
          <Project width="500px" stackBgColor="#F6F6FF" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg"]} pictures={["./timemachines/TimeMachine.png", "./timemachines/TimeMachine2.png", "./timemachines/TimeMachine3.png", "./timemachines/TimeMachine4.png", "./timemachines/TimeMachine5.png"]} code={''} website={''}/>
          <Project width="500px" stackBgColor="#F6F6FF" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg"]} pictures={["./playpal/playpal.png", "./playpal/playpal.png", "./playpal/playpal3.png", "./playpal/playpal4.png", "./playpal/playpal5.png", "./playpal/playpal6.png"]} code={''} website={''}/>
          <Project width="500px" stackBgColor="#EDE8DC" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg", "./stack/react.svg", "./stack/redux.svg"]} pictures={["./advancetodo/advancetodo.png", "./advancetodo/advancetodo2.png"]} code={''} website={''}/>

        </div>
      </div>
    </div>
  )
}
