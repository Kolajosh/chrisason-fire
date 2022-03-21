import React from "react";
import refurbish from "../../Images/refurbish.png";
import yellow from "../../Images/yellow.png";
import red from "../../Images/red.png";
import fire from "../../Images/fire.png";
import "./Refurbish.css";

function Refurbish() {
  return (
    <>
      <div className="refurbishment-img">
        <img src={refurbish} alt="Homepage"></img>
        <div className="refurbishment-text">
          <h1>Chrisason Refurbishment Process</h1>
        </div>
      </div>

      <div className="refurbish-card-grid">
        <div className="refurbish-card">
          <div className="refurbish-card-img">
            <img src={yellow} alt=""></img>
          </div>
          <div className="refurbish-card-text">
            <p className="ptitle">Safety Equipment</p>
            <p>
              Our workshops have been fitted with the newest and most modern
              fire equipment and tools to help our engineers and technicians
              refurbish, service and maintain your fire protection equipment to
              the highest standards.
            </p>
          </div>
        </div>

        <div className="refurbish-card">
          <div className="refurbish-card-img">
            <img src={red} alt=""></img>
          </div>
          <div className="refurbish-card-text">
            <p className="ptitle">Refabrication</p>
            <p>
              Chrisason is one of the few fire protection organisations in
              Nigeria to be certified with both BSI and BAFE. These
              certifications allows us to guarantee you a quality fabrication
              and refurbishment process should you chose to do business with us.
            </p>
          </div>
        </div>

        <div className="refurbish-card">
          <div className="refurbish-card-img">
            <img src={fire} alt=""></img>
          </div>
          <div className="refurbish-card-text">
            <p className="ptitle">Fire Products</p>
            <p>
              Chrisason is one of the few fire protection organisations in
              Nigeria to be certified with both BSI and BAFE. These
              certifications allows us to guarantee you a quality fabrication
              and refurbishment process should you chose to do business with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refurbish;
