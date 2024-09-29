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
    setCurrentSlide(prev => pictures[prev+1] ? prev + 1 : prev)
  }
  const handleBack = () => {
    setCurrentSlide(prev => pictures[prev - 1] ? prev - 1 : prev)
  }
  return (
    <div  className="" style={{width:width}}>

      <div className="image-container">
        <div className="flex justify-evenly">
          <a href={code} style={{width:"49%", backgroundColor: "rgb(129, 178, 154)"}} className=" text-white font-bold flex justify-center rounded hover:opacity-50">Code</a>
          <a href={website} style={{width:"49%",backgroundColor: "rgb(129, 178, 154)"}} className="text-white font-bold flex justify-center rounded hover:opacity-50">Website</a>
        </div>
        <div onClick={()=> handleBack()} className="arrow arrow-left">
        <FontAwesomeIcon icon={faCaretLeft} />
        </div>

        <img src={pictures[currentSlide]} alt="Project Pictures "/>

        <div onClick={() => handleNext()} className="arrow arrow-right">
        <FontAwesomeIcon icon={faCaretRight} />
        </div>

      </div>

      <div style={{backgroundColor:stackBgColor, height:"40px"}} className="px-3 py-1 rounded flex justify-center">
        {
          stack.map( (ref: string) => <img className="icon mx-2" src={ref} alt="" />)
        }
      </div>
    </div>
  )

}
