import React from 'react';
import { useState, useEffect } from "react";
import "./slider.css";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
export default function PicSlider({url, limit}) {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  console.log('initiated')
  useEffect( () => {
    console.log("went inside Effect")
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${limit}`);
        console.log(response)
        const data = await response.json();
        setImages(data)

      } catch (error) {
        console.log(error)
        setError(error.message)
      } finally {
        console.log(isLoading)
        setIsLoading(false);
      }

    }
    fetchData()
  }, [])


  const handleBackwardchange = () => {
    setCurrentSlide( (prev) => currentSlide !== 0 ? prev - 1 : prev);

  }

  const handleForwardChange = () => {
    setCurrentSlide( (prev) => images.length -1 > currentSlide ? prev + 1 : prev);
  }
  const updateSelection = (index) => {
    return () => {
      setCurrentSlide(index)
    }

  }
  console.log("what happens next")
  if(isLoading) {
    return <div>Data is loading</div>
  }
  if (error) return <div>Sorry Error { error }occured</div>
  return (
    <div>
      <div>

      <button onClick={handleBackwardchange} className="back-button"> &lt; </button>
      {
        images.map( (image, index) => <img className={ index === currentSlide ? "image" : " hide image"} src={image.download_url} /> )
      }
      <button onClick={handleForwardChange}className="back-button"> &gt; </button>
      </div>
      <div className="stars">
        {
          [...Array(images.length)].map( (_, index) => <h1 key={index} onClick={updateSelection(index)}>*</h1>)
        }
      </div>
    </div>
  )
}
