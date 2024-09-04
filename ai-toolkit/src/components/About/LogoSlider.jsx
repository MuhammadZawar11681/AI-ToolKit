import React from "react";
import Slider from "react-slick";
import logo_1 from "../../Assets/Projects/ContentGenerator_2.webp";
import logo_2 from "../../Assets/Projects/contentgenerator2.png";
import logo_3 from "../../Assets/Projects/TextToImage.png";
import logo_4 from "../../Assets/Projects/TextToImage2.png";
import logo_5 from "../../Assets/Projects/TextToSpeech.png";
import logo_6 from "../../Assets/Projects/TextToSpeech2.png";
import logo_7 from "../../Assets/Projects/SpeechToText.png";
import logo_8 from "../../Assets/Projects/TextToVideo.png";
import logo_9 from "../../Assets/Projects/AllTools.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css"; // Import custom CSS

function LogoSlider() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="logo-slider-container">
      <Slider {...settings}>
        <div className="logo-slide">
          <img className="logo-image" src={logo_1} alt="Logo 1" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_2} alt="Logo 2" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_3} alt="Logo 3" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_4} alt="Logo 4" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_5} alt="Logo 5" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_6} alt="Logo 6" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_7} alt="Logo 7" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_8} alt="Logo 7" />
        </div>
        <div className="logo-slide">
          <img className="logo-image" src={logo_9} alt="Logo 7" />
        </div>
      </Slider>
    </div>
  );
}

export default LogoSlider;
