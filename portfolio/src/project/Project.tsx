import { useState } from "react";
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
}: props) {
  const blackShade = useRef<HTMLDivElement>(null);
  const projectDiv = useRef<HTMLDivElement>(null);
  const descriptionDiv = useRef<HTMLDivElement>(null);

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
    if (blackShade && projectDiv && descriptionDiv) {
      blackShade.current!.style.visibility = "visible";
      projectDiv.current!.style.zIndex = "50";
      descriptionDiv.current!.classList.add("scroll-animation");
    }
  };

  const removeBlackShade = () => {
    if (blackShade && projectDiv && descriptionDiv) {
      blackShade.current!.style.visibility = "hidden";
      projectDiv.current!.style.zIndex = "1";
      descriptionDiv.current!.classList.remove("scroll-animation");
    }
  };
  return (
    <>
      <div ref={blackShade} className="dark-bg-shadow">
        <div ref={descriptionDiv}>
          <div className="description">
            <h3 className="my-3 text-2xl">{descHeader || "Heading here"}</h3>
            <span>{description || "your description here"}</span>
          </div>
        </div>
      </div>
      <div
        ref={projectDiv}
        onMouseEnter={displayDescription}
        onMouseLeave={removeBlackShade}
        className="mx-3 projectIndex"
        style={{ width: width }}
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
    </>
  );
}
