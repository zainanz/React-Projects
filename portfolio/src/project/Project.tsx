import { useState } from "react";
export default function Project(){
  const pictures = ["./timemachines/TimeMachine.png", "./timemachines/TimeMachine2.png", "./timemachines/TimeMachine3.png", "./timemachines/TimeMachine4.png", "./timemachines/TimeMachine5.png"]
  const [currentSlide, setCurrentSlide] = useState(pictures[0])
  return (
    <div>
      <div className="image-container">
        <div className="arrow-left">
         /
        </div>
        <img src='./timemachines/TimeMachine.png' style={{width:'600px'}}/>
        <div className="arrow-right">
         /
        </div>
      </div>
      <div>
        Stack here
      </div>
    </div>
  )

}
