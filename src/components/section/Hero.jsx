import React from "react";
import "../../styles/components/section/hero.scss";
import HeroImg from "../../images/hero_img.png";

function Hero() {
  return (
    <>
      <div className="hero-conainer">
        <div className="hero-span-container">
          <span>librairie</span>
          <span>expérience</span>
        </div>
        <div>
          <img className="hero-image" srcSet={HeroImg} />
        </div>
      </div>
    </>
  );
}

export default Hero;
