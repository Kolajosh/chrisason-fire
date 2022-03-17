import React from "react";
import firesafety from "../../Images/firesafety.png";
import "./FireSafety.css";

function FireSafety() {
  return (
    <>
      <div className="safety-img">
        <img src={firesafety} alt="Homepage"></img>
        <div className="safety-text">
          <h1>Fire Safety Training</h1>
        </div>
      </div>

      <div className="safety-context">
        <div className="safety-lt">
          Our fire safety training courses offer comprehensive, accredited
          training to individuals, managers, and organisations. We offer fire
          safety courses in basic fire safety training, fire risk assessment,
          the principles of fire safety for the workplace, fire warden (fire
          marshal) training, and fire risk assessment and management training.
          <br />
          <br />
          Today’s most exceptional organisations take the safety of the people
          and assets very seriously. In this stead, they invite experts to
          train, equip and inform their team on how to stay safe and protect
          company assets in the event of a fire outbreak.
          <br />
          <br />
          Chrisason Fire Protection offers a host of fire training workshops to
          help organisations understand how to fight small fires, know when to
          evacuate and safely protect assets. It is also a legal requirement for
          certain members of staff to be trained in fire safety procedures in
          the workplace.
          <br />
          <br />
          Our Training includes: safety measures to proactively practice in the
          workplace to prevent fire, what action they should take on the
          discovery of a fire, know the difference between different fire
          classes, which extinguisher to use for which fire and what the
          evacuation procedure is.
        </div>
      </div>
      <div className="safety-content-black">
        <div className="scb-left">
          <div className="scb-title">Safety First</div>
          <div className="scb-body">
            Our fire safety training courses offer comprehensive, accredited
            training to individuals, managers, and organisations. We offer fire
            safety courses in basic fire safety training, fire risk assessment,
            the principles of fire safety for the workplace, fire warden (fire
            marshal) training, and fire risk assessment and management training.
            <br />
            <br />
            Today’s most exceptional organisations take the safety of the people
            and assets very seriously. In this stead, they invite experts to
            train, equip and inform their team on how to stay safe and protect
            company assets in the event of a fire outbreak.
            <br />
            <br />
            Chrisason Fire Protection offers a host of fire training workshops
            to help organisations understand how to fight small fires, know when
            to evacuate and safely protect assets. It is also a legal
            requirement for certain members of staff to be trained in fire
            safety procedures in the workplace.
            <br />
            <br />
            Our Training includes: safety measures to proactively practice in
            the workplace to prevent fire, what action they should take on the
            discovery of a fire, know the difference between different fire
            classes, which extinguisher to use for which fire and what the
            evacuation procedure is.
          </div>
        </div>

        <div className="scb-right">
          <div className="scb-title">Zero Fatalities</div>
          <div className="scb-body">
            Zero Fatalities in over 30years.. is no coincidence. We are devoted
            to high standards of health and safety, recognising our duty and
            legal responsibilities for securing the health, safety and welfare
            of all its employees, sub-contractors working on our behalf and
            others affected by our activities. We strive to achieve continuous
            improvements in health and safety performance.
            <br />
            <br />
            In addition to Fire Safety Training, Chrisason Fire Protection
            offers training workshops in
            <ul>
              <li>Active shooter/Hostile event response</li>
              <li>Alternative Fuel Vehicles Safety Training</li>
              <li>Building and life safety</li>
              <li>Electrical</li>
              <li>Emergency response</li>
              <li>Fire protection systems</li>
              <li>Health care</li>
              <li>Wildfire hazards and mitigation</li>
              <li>Hot work</li>
              <li>Industrial hazards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FireSafety;
