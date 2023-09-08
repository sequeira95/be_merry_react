import { useState } from "react";
import { LeftArrow, RightArrow } from "../icons";
import './Carousel.css'
import { useEffect } from "react";

export function Carousel ({images = [], autoPlay = true}){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ play ] = useState(autoPlay)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }
  useEffect(() =>{
    if(play && images.length > 1){
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval)
    }
  },[play, images.length])
  return(
    <section className="carousel">
      <div
        className="carousel-image"
        style={{backgroundImage:`url(${images[currentIndex]})`}}>
      </div>
      {
        images.length > 1 && 
          <div className="slide_direction">
            <div className="left" onClick={handlePrevious}>
              <LeftArrow/>
            </div>
            <div className="right" onClick={handleNext}>
              <RightArrow/>
            </div>
          </div>
      }
      {
        images.length > 1 &&
        <div className="indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      }
    </section>
  )
}