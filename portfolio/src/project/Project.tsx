import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./project.css"
type props ={
  stack: string[],
  pictures: string[],
  width: string,
  code: string,
  website: string,
  stackBgColor: string
}
export default function Project({code="", stackBgColor = "white", website="", width = "600px", stack, pictures}: props){
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleNext = () => {
    if(currentSlide === pictures.length -1) return setCurrentSlide(0)
    setCurrentSlide(prev => pictures[prev+1] ? prev + 1 : prev)
  }
  const handleBack = () => {
    if(currentSlide === 0) return setCurrentSlide(pictures.length -1)
    setCurrentSlide(prev => pictures[prev - 1] ? prev - 1 : prev)
  }
  return (
    <div  className="mx-3" style={{width:width}}>

      <div className="image-container">
        <div className="flex justify-evenly">
          <a href={code} target="_blank" style={{width:"49%", backgroundColor: "rgb(129, 178, 154)"}} className=" text-white font-bold flex justify-center rounded hover:opacity-50" rel="noreferrer">Code</a>
          {
            website !== "" ?
            (<a href={website} target="_blank" style={{width:"49%",backgroundColor: "rgb(129, 178, 154)"}} className="text-white font-bold flex justify-center rounded hover:opacity-50" rel="noreferrer">Website</a>) :
            <button style={{width:"49%",backgroundColor: "rgba(129, 178, 154, 0.5)"}} title="Sorry, website is down." className="text-white font-bold flex justify-center rounded" rel="noreferrer">Website</button>
          }        </div>
        <div onClick={()=> handleBack()} style={{zIndex:"100"}} className="arrow arrow-left">
        <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className="flex overflow-hidden translate-transition">
          {
            pictures.map( (pic, index) => (<img src={pic} key={index} style={{translate:`${-100 * currentSlide}%`}} alt="Project Pictures "/>
            ))
          }
        </div>

        <div onClick={() => handleNext()} style={{zIndex:"100"}} className="arrow arrow-right">
        <FontAwesomeIcon icon={faCaretRight} />
        </div>

      </div>

      <div style={{backgroundColor:stackBgColor, height:"50px"}} className="px-3 py-1 rounded flex justify-center">
        {
          stack.map( (ref: string) => <img className="icon mx-2" src={ref} alt="" />)
        }
      </div>
    </div>
  )

}
