import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./project.css"
type props ={
  stack: string[],
  pictures: string[],
  width: string
}
export default function Project({width = "600px", stack, pictures}: props){
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

        <div onClick={()=> handleBack()} className="arrow arrow-left">
        <FontAwesomeIcon icon={faCaretLeft} />
        </div>

        <img src={pictures[currentSlide]} alt="Project Pictures "/>

        <div onClick={() => handleNext()} className="arrow arrow-right">
        <FontAwesomeIcon icon={faCaretRight} />
        </div>

      </div>

      <div className="bg-white px-3 py-1 rounded flex ">
        {
          stack.map( (ref: string) => <img className="icon mx-2" src={ref} alt="" />)
        }
      </div>
      <div className="border flex">
        <a href=""  style={{backgroundColor: "rgb(129, 178, 154)"}} className="flex px-20 justify-center rounded-md text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Code</a>
        <a href="">Website</a>
      </div>
    </div>
  )

}
