import { RefObject, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

import "./project.css";
type props = {
  stack: string[];
  pictures: string[];
  width: string;
  code: string;
  website: string;
  stackBgColor: string;
  description: string;
  descHeader: string;
  mainDom: RefObject<HTMLDivElement>;
};

export default function Project({
  code = "",
  stackBgColor = "white",
  website = "",
  width = "600px",
  description,
  stack,
  pictures,
  descHeader,
  mainDom,
}: props) {
  const [bigScreen, setBigScreen] = useState<boolean | null>(null);
  const blackShade = useRef<HTMLDivElement>(null);
  const projectDiv = useRef<HTMLDivElement>(null);
  const descriptionDiv = useRef<HTMLDivElement>(null);
  const descDiv = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (currentSlide === pictures.length - 1) return setCurrentSlide(0);
    setCurrentSlide((prev) => (pictures[prev + 1] ? prev + 1 : prev));
  };
  const handleBack = () => {
    if (currentSlide === 0) return setCurrentSlide(pictures.length - 1);
    setCurrentSlide((prev) => (pictures[prev - 1] ? prev - 1 : prev));
  };

  const displayDescription = () => {
    projectDiv.current!.style.zIndex = "50";
    if (!bigScreen) {
      descDiv.current!.style.transform = "translateX(0px)";
      projectDiv.current!.style.transform = "translateX(0px)";
    } else {
      blackShade.current!.style.visibility = "visible";
      descriptionDiv.current!.classList.add("scroll-animation");
    }
  };

  const removeBlackShade = () => {
    if (!bigScreen) {
      descDiv.current!.style.transform = "translateX(-200%)";
      projectDiv.current!.style.transform = "translateX(-25%)";
    } else {
      blackShade.current!.style.visibility = "hidden";
      descriptionDiv.current!.classList.remove("scroll-animation");
      projectDiv.current!.style.zIndex = "5";
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1600) {
      // To remove -25% from big screen
      projectDiv.current!.style.transform = "translateX(0%)";
      setBigScreen(true);
    } else {
      // When resized it sets -25% so it centers it for hover effect
      projectDiv.current!.style.transform = "translateX(-25%)";
      setBigScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {bigScreen ? (
        <div ref={blackShade} className="dark-bg-shadow">
          <div className="" ref={descriptionDiv}>
            <div className={bigScreen ? "description maxdesc" : "description"}>
              <h3 className="my-3 text-2xl">{descHeader || "Heading here"}</h3>
              <span>{description || "your description here"}</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="transform-animate"
          style={{
            visibility: "visible",
            transform: "translateX(-200%)",
            width: "30%",
          }}
          ref={descDiv}
        >
          <div className={bigScreen ? "description maxdesc" : "description"}>
            <h3 className="my-3 text-2xl">{descHeader || "Heading here"}</h3>
            <span>{description || "your description here"}</span>
          </div>
        </div>
      )}
      <div
        ref={projectDiv}
        onMouseEnter={displayDescription}
        onMouseLeave={removeBlackShade}
        className="mx-3 projectIndex transform-animate"
      >
        <div className="image-container">
          <div className="flex justify-evenly">
            <a
              href={code}
              target="_blank"
              style={{ width: "49%", backgroundColor: "rgb(129, 178, 154)" }}
              className=" text-white font-bold flex justify-center rounded hover:opacity-50"
              rel="noreferrer"
            >
              Code
            </a>
            {website !== "" ? (
              <a
                href={website}
                target="_blank"
                style={{ width: "49%", backgroundColor: "rgb(129, 178, 154)" }}
                className="text-white font-bold flex justify-center rounded hover:opacity-50"
                rel="noreferrer"
              >
                Website
              </a>
            ) : (
              <button
                style={{
                  width: "49%",
                  backgroundColor: "rgba(129, 178, 154, 0.5)",
                }}
                title="Sorry, website is down."
                className="text-white font-bold flex justify-center rounded"
                rel="noreferrer"
              >
                Website
              </button>
            )}{" "}
          </div>
          <div
            onClick={() => handleBack()}
            style={{ zIndex: "100" }}
            className="arrow arrow-left"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </div>
          <div className="flex overflow-hidden translate-transition">
            {pictures.map((pic, index) => (
              <img
                src={pic}
                key={index}
                style={{ translate: `${-100 * currentSlide}%` }}
                alt="Project Pictures "
              />
            ))}
          </div>

          <div
            onClick={() => handleNext()}
            style={{ zIndex: "100" }}
            className="arrow arrow-right"
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>

        <div
          style={{ backgroundColor: stackBgColor, height: "50px" }}
          className="px-3 py-1 rounded flex justify-center"
        >
          {stack.map((ref: string) => (
            <img className="icon mx-2" key={ref} src={ref} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
