import React from "react";
import "./Fabrication.css";
import fabri from "../../Images/fabri.png";
import pro1 from "../../Images/process1.svg";
import pro2 from "../../Images/process2.svg";
import pro3 from "../../Images/process3.svg";
import pro4 from "../../Images/process4.svg";

function Fabrication() {
  return (
    <>
      <div className="fabrication-img">
        <img src={fabri} alt="Homepage"></img>
        <div className="fabrication-text">
          <h1>Chrisason Fabrication</h1>
        </div>
      </div>

      <div className="fabrication-paragraph">
        <p>
          Chrisason Fire is certified BAFE SP103 - The Inspection, Testing,
          Refurbishing and Refilling of Portable Fire Extinguishers and
          Containers in conjunction with Fire Extinguishing Equipment.
          <br />
          <br />
          We test and refurbish all portable and wheeled fire extinguisher. Our
          team of expert fire technicians are experienced in overhauling all
          portable and wheeled fire extinguishers, hosereels and other fire
          prevention equipement.
          <br />
          <br />
          Fire extinguishers require stringent maintenance to ensure they will
          work when needed, and are more importantly, safe. Fire extinguishers
          are pressurised vessels that can explode when corroded or damaged, and
          have been know to cause serious injury and even fatal.
        </p>
      </div>

      <div className="fabrication-grid">
        <div className="fabrication1">
          <div className="fabrication-procss-img">
            <img src={pro4} alt="25%"></img>
          </div>
          <div className="fabrication-title">Frequent Clients</div>
          <div className="fabrication-body"></div>
        </div>

        <div className="fabrication2">
          <div className="fabrication-procss-img">
            <img src={pro3} alt="25%"></img>
          </div>
          <div className="fabrication-title">Key Global Parrtners</div>
          <div className="fabrication-body"></div>
        </div>

        <div className="fabrication3">
          <div className="fabrication-procss-img">
            <img src={pro2} alt="25%"></img>
          </div>
          <div className="fabrication-title">Referrals</div>
          <div className="fabrication-body"></div>
        </div>

        <div className="fabrication4">
          <div className="fabrication-procss-img">
            <img src={pro1} alt="25%"></img>
          </div>
          <div className="fabrication-title">Major Complaints</div>
          <div className="fabrication-body"></div>
        </div>
      </div>
    </>
  );
}

export default Fabrication;
