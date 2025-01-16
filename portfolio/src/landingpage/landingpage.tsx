import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState, lazy, Suspense, useEffect } from "react";
import "./landingpage.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Project = lazy(() => import("../project/Project"));
export default function LandingPage() {
  const domRef = useRef<HTMLInputElement | null>(null);
  const projectDOM = useRef<HTMLInputElement | null>(null);
  const toplinks = useRef<HTMLInputElement | null>(null);
  const stackDOM = useRef<HTMLInputElement | null>(null);
  const loadingDom = useRef<HTMLInputElement | null>(null);
  const [minimized, setMinimized] = useState(false);
  const tooltip = useRef<HTMLParagraphElement | null>(null);
  const techStack = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "SCSS",
    "TailwindCSS",
    "Bootstrap",
    "React",
    "React Native",
    "Redux",
    "PostgreSQL/MySQL",
    "Heroku",
    "Ruby on Rails",
    "ExpressJS",
    "NodeJS",
  ];

  const handleResize = () => {
    if (
      domRef.current &&
      projectDOM.current &&
      toplinks.current &&
      stackDOM.current
    ) {
      if (minimized) {
        toplinks.current.classList.remove("link-down");
        toplinks.current.classList.add("link-up");
        stackDOM.current.classList.add("stack-down");
        projectDOM.current.classList.remove("set-position");
        setTimeout(() => {
          toplinks.current?.classList.add("hidden");
          stackDOM.current?.classList.add("hidden");
          toplinks.current?.classList.remove("link-up");
          stackDOM.current?.classList.remove("stack-down");
          toplinks.current?.classList.add("link-down");
        }, 500);
      } else {
        projectDOM.current.classList.add("set-position");
        stackDOM.current.classList.remove("hidden");
        toplinks.current.classList.remove("hidden");
      }
      setMinimized((prev) => !prev);
    }
  };
  type MouseEventPara = React.MouseEvent<HTMLParagraphElement, MouseEvent>;

  // High Five Handlers
  const onMouseEnter = (e: MouseEventPara) => {
    tooltip.current!.classList.remove("hidden");
    tooltip.current!.innerHTML = "Highfive?";
  };
  const handleMouseMove = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    tooltip.current!.style.top = `${e.clientY + 20}px`;
    tooltip.current!.style.left = `${e.clientX}px`;
  };
  const onMouseLeave = (e: MouseEventPara) => {
    tooltip.current!.innerHTML = "";
    tooltip.current!.classList.add("hidden");
  };

  const performHighFive = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement;
    target.classList.remove("wave-animation-infinite");
    target.classList.add("highfive-animation");

    setTimeout(() => {
      target.classList.remove("highfive-animation");
      target.classList.add("wave-animation-infinite");
    }, 1000);
  };

  useEffect(() => {
    let isLoaded = false;
    const loaded = () => {
      loadingDom.current!.classList.add("hidden");
      projectDOM.current!.classList.remove("hidden");
      projectDOM.current!.classList.add("three");
    };
    const loadingScreen = setInterval(() => {
      console.log("loaded inside interval", isLoaded);
      if (isLoaded) {
        loaded();
        clearInterval(loadingScreen);
      }
    }, 4000);
    const setLoaded = () => {
      isLoaded = true;
      console.log("Ready and Loaded: ", isLoaded);
    };
    // if (sessionStorage.getItem("wasCached") === "true") {
    //   console.log("Cached");
    //   loaded();
    //   clearInterval(loadingScreen);
    // }

    window.addEventListener("load", setLoaded);
    if (document.readyState === 'complete') {
      setLoaded(); 
    } else {
      window.addEventListener('load', setLoaded); 
    }
    return () => {
      window.removeEventListener("load", setLoaded);
      clearInterval(loadingScreen);
    };
  }, []);

  return (
    <>
      <div
        className="glass-effect flex justify-center items-center"
        ref={loadingDom}
        style={{ width: "100vw", height: "100vh" }}
      >
        <svg
          width="3.5em"
          height="3.5em"
          className="border-5 glass-effect svg-container"
        >
          <text
            x="50%"
            y="50%"
            dy=".32em"
            textAnchor="middle"
            className="svg-text svg-name"
          >
            Z
          </text>

          <g>
            <path
              className="svg-dot"
              d="M12 21.7C11.8667 21.701 11.7355 21.6665 11.62 21.6L3.86999 17.12C3.75615 17.0543 3.66186 16.9594 3.59683 16.8452C3.5318 16.731 3.49838 16.6014 3.5 16.47V7.53001C3.49838 7.39856 3.5318 7.26906 3.59683 7.15482C3.66186 7.04058 3.75615 6.94572 3.86999 6.88001L11.62 2.40001C11.7346 2.33608 11.8637 2.30252 11.995 2.30252C12.1263 2.30252 12.2553 2.33608 12.37 2.40001L20.12 6.88001C20.2364 6.9436 20.3333 7.03771 20.4003 7.15224C20.4672 7.26676 20.5017 7.39736 20.5 7.53001V16.47C20.5017 16.6027 20.4672 16.7333 20.4003 16.8478C20.3333 16.9623 20.2364 17.0564 20.12 17.12L12.37 21.6C12.2586 21.6676 12.1303 21.7023 12 21.7ZM4.99999 16L12 20L19 16V8.00001L12 4.00001L4.99999 8.00001V16Z"
            />
            <path
              className=" svg-dot-3"
              d="M12 21.7C11.8667 21.701 11.7355 21.6665 11.62 21.6L3.86999 17.12C3.75615 17.0543 3.66186 16.9594 3.59683 16.8452C3.5318 16.731 3.49838 16.6014 3.5 16.47V7.53001C3.49838 7.39856 3.5318 7.26906 3.59683 7.15482C3.66186 7.04058 3.75615 6.94572 3.86999 6.88001L11.62 2.40001C11.7346 2.33608 11.8637 2.30252 11.995 2.30252C12.1263 2.30252 12.2553 2.33608 12.37 2.40001L20.12 6.88001C20.2364 6.9436 20.3333 7.03771 20.4003 7.15224C20.4672 7.26676 20.5017 7.39736 20.5 7.53001V16.47C20.5017 16.6027 20.4672 16.7333 20.4003 16.8478C20.3333 16.9623 20.2364 17.0564 20.12 17.12L12.37 21.6C12.2586 21.6676 12.1303 21.7023 12 21.7ZM4.99999 16L12 20L19 16V8.00001L12 4.00001L4.99999 8.00001V16Z"
            />
            <path
              className="svg-dot-2"
              d="M12 21.7C11.8667 21.701 11.7355 21.6665 11.62 21.6L3.86999 17.12C3.75615 17.0543 3.66186 16.9594 3.59683 16.8452C3.5318 16.731 3.49838 16.6014 3.5 16.47V7.53001C3.49838 7.39856 3.5318 7.26906 3.59683 7.15482C3.66186 7.04058 3.75615 6.94572 3.86999 6.88001L11.62 2.40001C11.7346 2.33608 11.8637 2.30252 11.995 2.30252C12.1263 2.30252 12.2553 2.33608 12.37 2.40001L20.12 6.88001C20.2364 6.9436 20.3333 7.03771 20.4003 7.15224C20.4672 7.26676 20.5017 7.39736 20.5 7.53001V16.47C20.5017 16.6027 20.4672 16.7333 20.4003 16.8478C20.3333 16.9623 20.2364 17.0564 20.12 17.12L12.37 21.6C12.2586 21.6676 12.1303 21.7023 12 21.7ZM4.99999 16L12 20L19 16V8.00001L12 4.00001L4.99999 8.00001V16Z"
            />
          </g>
        </svg>
      </div>
      <div
        ref={projectDOM}
        className="flex flex-col hidden"
        style={{ height: "auto", position: "relative" }}
      >
        <p
          ref={tooltip}
          className="bg-white rounded p-5 font-bold text-gray hidden"
          style={{ position: "absolute", zIndex: "500" }}
        ></p>
        {/* Portfolio Code and Website */}
        <div
          ref={toplinks}
          style={{ width: "99%", height: "" }}
          className="hidden link-down border justify-between flex"
        >
          <a
            href="https://github.com/zainanz/React-Projects/tree/main/portfolio"
            target="_blank"
            style={{ width: "49%", backgroundColor: "rgb(129, 178, 154)" }}
            className=" text-white font-bold flex justify-center rounded hover:opacity-50"
            rel="noreferrer"
          >
            Code
          </a>
          <a
            href="/"
            style={{ width: "49%", backgroundColor: "rgb(129, 178, 154)" }}
            className=" text-white font-bold flex justify-center rounded hover:opacity-50"
          >
            Website
          </a>
        </div>

        <div
          ref={domRef}
          className="flex justify-center flex-col px-10 glass-effect dom-ref"
          style={{
            height: "100%",
            backgroundColor: "rgb(255, 255, 255, 0.3)",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Resize Icon */}
          <div
            className="flex items-center"
            style={{ position: "absolute", top: "10px", right: "20px" }}
          >
            {/* <Link to={"/docs"}>
              <button
                className="mx-5 rounded text-white font-bold"
                style={{
                  width: "120px",
                  backgroundColor: "rgb(129, 178, 154)",
                }}
              >
                Docs
              </button>
            </Link> */}
            <img
              onClick={() => handleResize()}
              className="hover:opacity-50 resize-icon"
              style={{ width: "2rem" }}
              alt="resize"
              src="./reize.svg"
            />
          </div>

          {/* Name */}

          <div className="flex items-center portdiv">
            <div className="typing-effect overflow-hidden">
              <h1 className="text-4xl myname my-5 arial-font">
                Hi, I am Zainan Ali{" "}
                <p
                  onClick={performHighFive}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onMouseMove={handleMouseMove}
                  className="wave-animation-infinite cursor-pointer"
                >
                  👋
                </p>
              </h1>
            </div>
            <span className="fade-in fade-in-delay text-base md:text-lg lg:text-xl xl:text-2xl mx-5">
              {" "}
              - Full Stack Developer
            </span>
          </div>
          <div className="flex justify-between">
            {/* 55% W First Section Starts here */}
            <div style={{ width: "55%" }} className="">
              {/* Description */}
              <span className="fade-in mx-5 text-1xl" style={{ width: "10%" }}>
                ~ A dedicated web developer with a passion for crafting
                responsive and user-friendly websites.
              </span>

              {/* Contact */}
              <div className="my-5 fade-in flex justify-center items-center flex-col">
                <div className="w-full flex justify-between">
                  <ul className=" my-4">
                    <li>
                      <span className="font-bold">zainanzaher09@gmail.com</span>
                    </li>
                    <li>
                      <span className="font-bold">+351 920 433 306</span>
                    </li>
                    <li>
                      <span className="font-bold">Lisbon, Portugal</span>
                    </li>
                  </ul>
                  <div className="my-5">
                    <a
                      href="https://www.linkedin.com/in/zainan-ali"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="font-bold my-2 flex items-center mx-5 text-3xl">
                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                        <span className=" px-3 text-sm">
                          www.linkedin.com/in/zainan-ali
                        </span>
                      </span>
                    </a>
                    <a
                      href="https://github.com/zainanz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="font-bold my-1 flex items-center mx-5 text-3xl">
                        <FontAwesomeIcon icon={faGithub} />{" "}
                        <span className="px-3 text-sm">
                          https://github.com/zainanz
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hard Skills Section */}
              <div className="fade-in text-2xl flex flex-col w-full ">
                <h3 className="text-2xl my-3 arial-font text-base md:text-lg lg:text-xl xl:text-2xl">
                  <span className="font-bold">T</span>ech Stack
                </h3>
                <ul
                  style={{ backgroundColor: "#81b29a" }}
                  className=" font-bold tracking-wide py-2 px-3 text-white stroked-text arial-font tech-stack-list"
                >
                  {techStack.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 40% W Second Section */}
            {/* Resume PLUG */}
            <div
              className="fade-in  flex justify-center items-end"
              style={{ width: "40%" }}
            >
              <div style={{ width: "30rem" }}>
                <strong>Looking to hire?</strong>
                <p className="px-3">
                  Feel free to download my resume and contact me to discuss how
                  I can contribute to your team.
                </p>
                <a
                  download
                  href="./ZainanAli.pdf"
                  title="Download Zainan's Resume"
                  style={{ width: "fit-content" }}
                  className="flex flex-col justify-center mx-auto my-4"
                >
                  <img
                    alt="Zainan's Resume Download"
                    className="my-3"
                    src="./stack/cvdownload.svg"
                  ></img>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Project Section */}

          <Suspense
            fallback={
              <div
                style={{ height: "100%", width: "100%" }}
                className="flex justify-center items-center flex-col"
              >
                <FontAwesomeIcon
                  className="text-3xl loading-animation-infinite"
                  icon={faSpinner}
                />
                <span className="text-1xl my-9 text-gray-800">
                  loading projects :)
                </span>
              </div>
            }
          >
            <div className="transition-up">
              <h4 className="text-center text-2xl font-bold my-14">Projects</h4>
              <div className="project-div">
                <Project
                  mainDom={domRef}
                  descHeader="Time Flies"
                  description={[
                    "Time Flies is a fun web application developed during my bootcamp with classmates.",
                    "Built using Ruby on Rails.",
                    "Allows users to rent their own time machines or rent from others, creating a unique experience for exploring different timelines.",
                    "Showcases our teamwork and creativity, as well as our web development skills.",
                  ]}
                  width="100%"
                  code={"https://github.com/cheblimarc4/Time_Machine_BNB"}
                  website={""}
                  stackBgColor="#F6F6FF"
                  stack={[
                    "./stack/css.svg",
                    "./stack/html.svg",
                    "./stack/rubyonrails.svg",
                    "./stack/javascript.svg",
                  ]}
                  pictures={[
                    "./timemachines/TimeMachine.png",
                    "./timemachines/TimeMachine2.png",
                    "./timemachines/TimeMachine3.png",
                    "./timemachines/TimeMachine4.png",
                    "./timemachines/TimeMachine5.png",
                  ]}
                />
                <Project
                  mainDom={projectDOM}
                  descHeader="PlayPal"
                  description={[
                    "A web application designed to connect new residents with local sports teams based on skill level and interests.",
                    "Developed collaboratively with fellow Le Wagon alumni.",
                    "Showcases our ability to work effectively in a team environment.",
                  ]}
                  width="100%"
                  code={"https://github.com/cheblimarc4/PlayPal"}
                  website={"https://www.play-pal.pro/"}
                  stackBgColor="#F6F6FF"
                  stack={[
                    "./stack/css.svg",
                    "./stack/html.svg",
                    "./stack/rubyonrails.svg",
                    "./stack/javascript.svg",
                  ]}
                  pictures={[
                    "./playpal/playpal.png",
                    "./playpal/playpal2.png",
                    "./playpal/playpal3.png",
                    "./playpal/playpal4.png",
                    "./playpal/playpal5.png",
                    "./playpal/playpal6.png",
                  ]}
                />
                <Project
                  mainDom={projectDOM}
                  descHeader="Auth Todo"
                  description={[
                    "The Auth To-Do List Application is designed for efficient task management.",
                    "Built with a Ruby on Rails API backend and a React frontend with Redux.",
                    "Features JWT authentication for secure user access.",
                    "Users can create, read, update, and delete tasks seamlessly.",
                    "Uses Redux for state management to ensure real-time updates.",
                    "Allows users to categorize and prioritize tasks effectively.",
                    "Showcases my full-stack skills by combining Ruby on Rails and React.",
                  ]}
                  width="100%"
                  code={
                    "https://github.com/zainanz/Advance-ToDo-JWT-Authentication"
                  }
                  website={"https://jwttodo.netlify.app"}
                  stackBgColor="#EDE8DC"
                  stack={[
                    "./stack/css.svg",
                    "./stack/html.svg",
                    "./stack/rubyonrails.svg",
                    "./stack/javascript.svg",
                    "./stack/react.svg",
                    "./stack/redux.svg",
                  ]}
                  pictures={[
                    "./advancetodo/advancetodo.png",
                    "./advancetodo/advancetodo2.png",
                  ]}
                />
              </div>
            </div>
          </Suspense>
        </div>

        {/* Portfolio Stack */}
        {/* Tech */}
        <div
          ref={stackDOM}
          className="hidden stack-up main-stack glass-effect flex items-center justify-center"
          style={{
            backgroundColor: "rgba(100, 100, 100, 0.3)",
            height: "50px",
            width: "100%",
          }}
        >
          <img
            className="mx-5 my-5"
            style={{ width: "50px" }}
            src="./stack/typescript.svg"
            alt=""
          />
          <img
            className="mx-5 my-5"
            style={{ width: "50px" }}
            src="./stack/tailwind.svg"
            alt=""
          />
          <img
            className="mx-5 my-5"
            style={{ width: "50px" }}
            src="./stack/html.svg"
            alt=""
          />
          <img
            className="mx-5 my-5"
            style={{ width: "50px" }}
            src="./stack/css.svg"
            alt=""
          />
          <img
            className="mx-5 my-5"
            style={{ width: "50px" }}
            src="./stack/javascript.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
