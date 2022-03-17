import React from "react";
import "./HeroSectionHome.css";
import img1 from "../../Images/herohome.png";

function HeroSectionHome() {
  return (
    <>
      <div className="hero-img">
        <img src={img1} alt="Homepage"></img>
        <div className="hero-text">
          <h1>Over ​260,000hours expertising in Fire Engineering</h1>
          <p>
            Since 1987 we have been providing Africa with easy access to safety
            technology
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSectionHome;
