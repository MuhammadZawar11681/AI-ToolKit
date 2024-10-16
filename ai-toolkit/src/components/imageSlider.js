import React, { useState, useEffect } from "react";
import "./imageslider.css";
import image1 from "./sliderImages/aimage-1.png";
import image2 from "./sliderImages/aimage-4.png";
import image3 from "./sliderImages/aimage-3.png";
import image4 from "./sliderImages/aimage-5.png";
import image5 from "./sliderImages/aimage-2.png";

const myImages = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const setBackgroundAnimation = () => {
      document.querySelector(
        ".image-slider-image"
      ).style.backgroundImage = `url(${myImages[index]})`;
    };

    const automaticSlider = () => {
      setIndex((prevIndex) =>
        prevIndex < myImages.length - 1 ? prevIndex + 1 : 0
      );
    };

    const slider = setInterval(automaticSlider, 5000);
    setBackgroundAnimation();

    return () => clearInterval(slider);
  }, [index]);

  const handleCircleClick = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className="main-image-slider">
      <div className="image-slider-pictures-frame">
        <div className="image-slider-image"></div>
        <div className="image-slider-circles-container">
          {myImages.map((_, idx) => (
            <div
              key={idx}
              tabIndex={idx}
              className={`image-slider-circle ${
                idx === index ? "image-slider-active" : ""
              }`}
              onClick={() => handleCircleClick(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
