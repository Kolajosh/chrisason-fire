import React from "react";
import "./HeroSectionCompany.css";
import img1 from "../../Images/herocompany.png";

function HeroSectionCompany() {
  return (
    <>
      <div className="company-hero-img">
        <img src={img1} alt="Homepage"></img>
        <div className="company-hero-text">
          <h1>About Chrisason Fire</h1>
        </div>
      </div>
    </>
  );
}

export default HeroSectionCompany;
