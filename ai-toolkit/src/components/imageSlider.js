import React, { useState, useEffect } from "react";
//import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import "./imageslider.css";
import image1 from "./sliderImages/contentGeneratorimage.avif";
import image2 from "./sliderImages/ai-image2.jpg";
import image3 from "./sliderImages/ai-image3.jpg";
import image4 from "./sliderImages/ai-image4.jpg";
import image5 from "./sliderImages/ai-image5.jpg";

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

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === myImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? myImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-image-slider">
      {/* <header>
        <h1 className="image-slider-title">Image Slider</h1>
      </header> */}
      <div className="image-slider-pictures-frame">
        <div className="image-slider-image">
          <div className="image-slider-arrows-container">
            <i
              id="preview"
              className="bi bi-caret-left"
              onClick={handlePrevClick}
            ></i>
            <i
              id="next"
              className="bi bi-caret-right"
              onClick={handleNextClick}
            ></i>
          </div>
        </div>
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
      {/* <div className="image-slider-attributions">
        <h3 className="image-slider-credits">Attributions</h3>
      </div> */}
    </div>
  );
};

export default ImageSlider;
