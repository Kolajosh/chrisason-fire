import React from "react";
import "./WhoWeAre.css";
import aboutfire from "../../Images/aboutfire.png";

function WhoWeAre() {
  return (
    <>
      <div className="about-section">
        <div className="about-text-1">
          <div className="about-title">Who We Are</div>
          <div className="about-paragraph-1">
            <p>
              Chrisason Fire is an indigenous Nigerian firm involved in
              importation, assembling, supply, installation and maintenance of
              various types of Fire Protection, Fire Fighting, Engineering, Fire
              Detection Equipment and Systems throughout the nation.
              <br />
              <br />
              We appreciate and associate with the Health, Safety, Environment
              Security and Fire Prevention efforts of our major clients
              including but not limited to Mobil Producing Nigeria Unlimited,
              Shell Petroleum Development Company of Nigeria Limited, NNPC, EPCL
              (INDORAMA), Notore Chemical Industries (NAFFCON) etc.
            </p>
          </div>
        </div>

        <div className="about-text-2">
          <div className="about-title">
            We specialise in Fire Protection Engineering + Safety
          </div>
          <div className="about-flex">
            <div className="img-left">
              <img src={aboutfire} alt="extinguiser"></img>
            </div>
            <div className="text-right">
              <p>
                We deal fully on Fire Fighting/Equipment, such as, Fire
                Extinguisher of all types and classes Fire Trucks /Equipment,
                Fire Hose Reel, Reel fire Fighting Foam & Powders, Foam
                Equipment Sprinkler System, CO2 Total Flooding Systems, Fire
                Detection System (Smoke, Heat, Flame, Explosion Sensors), Fire
                Hydrant Equipment, FM 200, Argon, lnergen, Fog Water Fire
                Fighting Systems, Dry Powder Fire Fighting Systems, Portable and
                Trolley units.
                <br />
                <br />
                We are fully committed to our responsibilities as regards the
                applications of the requirements of Health, Safety, Environment
                and Security in the execution of all kinds of our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
