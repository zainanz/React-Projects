import  {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import "./styles.css"
export default function StarRating(numOfStars){
  const [star, setStar] = useState(0);
  const [mouseOver, setMouseOver] = useState(0);
  const handleMouseOver = (index) => {
    setMouseOver(index + 1)
  }

  const handleMouseClick = (index) => {
    setStar(index+1)
    console.log(index + 1);
  }

  const handleMouseLeave = () => {
    setMouseOver(0);
  }
  const handleResetStar = (event) => {
    setStar(0);
    event.target.style.backgroundColor = `rgb(${255 - (Math.random() * 50 )}, ${255 - (Math.random()*10)}, ${255 - (Math.random()*10)})`
  }
  return (
    <div className="centerify">
      {
        [...Array(5)].map( (_, index) =>
          <FaStar
            className={ index + 1 <= (mouseOver || star) ? "active" : "inactive" }
            key={index + 1}
            onMouseOver={ () => handleMouseOver(index)}
            onMouseLeave={ () => handleMouseOver()}
            onClick = {() => handleMouseClick(index)}
            size={100}
          />
        )
      }
      <button onClick={(event) => handleResetStar(event)} className="reset-button">Remove Rating</button>
    </div>
  );
}
