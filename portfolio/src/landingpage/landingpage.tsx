import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./landingpage.css"
import Project from "../project/Project"
export default function LandingPage({element}: {element: React.MutableRefObject<HTMLDivElement | null>}){

  return (
    <div className="h-full flex justify-center flex-col px-28" style={{backgroundColor: "beige"}}>
      <div className="flex justify-between">
          <div style={{width:"55%"}} className=''>
          {/* Name */}
          <div className="flex items-center">
            <div className="typing-effect overflow-hidden">
              <h1 className="text-5xl myname my-5 robotomono-font ">Hi, I am Zainan Ali 👋</h1>
            </div>
            <span className="fade-in fade-in-delay text-2xl mx-5"> - Web Developer</span>
          </div>

          {/* Description */}
          <span className="fade-in mx-5 text-2xl" style={{width:'300px'}}>
            ~ As a web developer, I have hands on experience with various web technologies.
          </span>

          {/* Contact */}
          <div className="my-5 fade-in flex justify-center items-center flex-col">
            <div className="w-full flex justify-between">
              <ul className=" my-4 text-2x1xl">
                <li><span className="font-bold">zainanzaher09@gmail.com</span></li>
                <li><span className="font-bold">+351 920 433 306</span></li>
                <li><span className="font-bold">Lisbon, Portugal</span></li>
              </ul>
              <div className="my-5">
                <a href="https://www.linkedin.com/in/zainan-ali" target="_blank" rel="noreferrer"><span className='font-bold my-2 flex items-center mx-5 text-3xl'><FontAwesomeIcon icon={faLinkedin} /> <span className=' px-3 text-sm'>www.linkedin.com/in/zainan-ali</span></span></a>
                <a href="https://github.com/zainanz" target="_blank" rel="noreferrer"><span className='font-bold my-1 flex items-center mx-5 text-3xl'><FontAwesomeIcon icon={faGithub} /> <span className='px-3 text-sm'>https://github.com/zainanz</span></span></a>
                </div>
            </div>
          </div>

          {/* Hard Skills Section */}
          <div className="fade-in text-2xl flex flex-col w-full ">
            <h3 className="text-2xl my-3"><span className="font-bold">T</span>ech Stack</h3>
            <span style={{backgroundColor: "#81b29a"}} className=" font-bold tracking-wide py-2 px-3 text-white stroked-text robotomono-font"> HTML, CSS, Javascript, Typescript, SCSS, TailwindCSS, Bootstrap, React, Redux, PostgreSQL/MySQL and Ruby on Rails.</span>
          </div>

        </div>

        <div className='playwrite-font flex justify-center items-end' style={{width:"40%"}}>
          <div style={{width:"30rem"}}>
          <strong><i>Looking to hire?</i></strong>
          <p className='px-3'><i>Feel free to download my resume and contact me to discuss how I can contribute to your team.</i></p>
          <a download href="./ZainanAli.pdf" style={{width:"fit-content"}} className="flex flex-col justify-center mx-auto my-4"><img style={{transform:"rotate(2deg)"}} alt="Zainan's Resume Download" className="my-3" src="./stack/cvdownload.svg"></img>Zainan's Resume</a>
          </div>
        </div>
      </div>



      <div className='  fade-in'>
        <h4 className='text-center text-4xl font-bold my-5 robotomono-font my-14'>Projects</h4>
        <div className="flex justify-between">
          <Project width="500px" stackBgColor="#F6F6FF" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg"]} pictures={["./timemachines/TimeMachine.png", "./timemachines/TimeMachine2.png", "./timemachines/TimeMachine3.png", "./timemachines/TimeMachine4.png", "./timemachines/TimeMachine5.png"]} code={''} website={''}/>
          <Project width="500px" stackBgColor="#F6F6FF" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg"]} pictures={["./playpal/playpal.png", "./playpal/playpal.png", "./playpal/playpal3.png", "./playpal/playpal4.png", "./playpal/playpal5.png", "./playpal/playpal6.png"]} code={''} website={''}/>
          <Project width="500px" stackBgColor="#EDE8DC" stack={["./stack/css.svg", "./stack/html.svg", "./stack/rubyonrails.svg", "./stack/javascript.svg", "./stack/react.svg", "./stack/redux.svg"]} pictures={["./advancetodo/advancetodo.png", "./advancetodo/advancetodo2.png"]} code={''} website={''}/>

        </div>
      </div>
    </div>
  )
}
