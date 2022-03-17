import React from "react";
import orimg from "../../Images/orimg.png";
import servicing from "../../Images/servicing.png";
import fabrication from "../../Images/fabrication.png";
import procurement from "../../Images/procurement.png";
import installation from "../../Images/installation.png";
import "./ORcards.css";

function ORcards() {
  return (
    <>
      <div className="or-title">
        <h1>Chrisason Operations & Research</h1>
      </div>

      <div className="or-section">
        <div className="left-section">
          <p>
            Chrisason works closely with the NFPA Foundation on research now in
            its second quarter century of service, the Fire Protection Research
            Foundation continues to identify and facilitate research initiatives
            important to the fire protection engineering community. Activity at
            the Foundation remains high, with multiple projects of direct
            interest to SFPE members.
            <br />
            <br />
            The Fire Protection Research Foundation is an independent charitable
            organization established in 1982 with a mission to plan, manage and
            communicate research in support of the NFPA mission. The NFPA
            mission, in turn, is to reduce the worldwide burden of fire and
            other hazards.
          </p>
        </div>
        <div className="middle-section">
          <img src={orimg} alt=""></img>
        </div>
        <div className="right-section">
          <p>
            Over the past five years, the Foundation has developed active
            research programs in areas corresponding with major NFPA technical
            committee projects. These are: i. Detection and signaling; ii.
            iElectrical safety; iii. Fire suppression; iv. Firefighter
            protective clothing and equipment; v. Firefighting tactics; vi.
            Hazardous materials/commodity storage; and vii. Transportation.
            <br />
            <br />
            These projects cover a range of topics, from research supported by
            the U.S. Department of Homeland Security. A complete list of
            existing projects and recent reports is available at
            www.nfpa.org/foundation.
          </p>
        </div>
      </div>
      <div className="grid-sec">
        <div className="or-grid">
          <div className="or-context">
            <div className="or-img">
              <img src={servicing} alt=""></img>
            </div>
            <div className="or-text">
              <p className="ptitle">Servicing</p>
              <p className="psubtitle">Fire Systems</p>
              <p>
                Chrisason Fire are specialist at fabricating fire protection
                extinguishers and parts that may not be in the market.
              </p>
            </div>
          </div>

          <div className="or-context">
            <div className="or-img">
              <img src={fabrication} alt=""></img>
            </div>
            <div className="or-text">
              <p className="ptitle">Fabrication</p>
              <p className="psubtitle">Fire Units</p>
              <p>
                Chrisason Fire Engineers are experts at servicing fire
                protection systems, fire suppression systems, hosereels, fire
                alarms, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="or-grid">
          <div className="or-context">
            <div className="or-img">
              <img src={procurement} alt=""></img>
            </div>
            <div className="or-text">
              <p className="ptitle">Procurement</p>
              <p className="psubtitle">Fire Installments</p>
              <p>
                We at Chrisason help our clients procure equipment and machinery
                that help provide a safe and secure environment for clientele.
              </p>
            </div>
          </div>

          <div className="or-context">
            <div className="or-img">
              <img src={installation} alt=""></img>
            </div>
            <div className="or-text">
              <p className="ptitle">Installation</p>
              <p className="psubtitle">Fire Equioments</p>
              <p>
                With over 30years of experience we have become experts at
                installing a variety of fire protection equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ORcards;
