import React from "react";
import pro1 from "../../Images/process1.svg";
import pro2 from "../../Images/process2.svg";
import pro3 from "../../Images/process3.svg";
import pro4 from "../../Images/process4.svg";
import "./Process.css";

function Process() {
  return (
    <>
      <div className="process-grid">
        <div className="process1">
          <div className="process-img">
            <img src={pro4} alt="25%"></img>
          </div>
          <div className="process-title">Consult</div>
          <div className="process-body">
            <p>
              The first thing we do is arrange for a convenient time to discuss
              your challenges and safety issues.
            </p>
          </div>
        </div>

        <div className="process2">
          <div className="process-img">
            <img src={pro3} alt="25%"></img>
          </div>
          <div className="process-title">Design</div>
          <div className="process-body">
            <p>
              After consulting with your company, we would then have to research
              and analyse your safety challenges.
            </p>
          </div>
        </div>

        <div className="process3">
          <div className="process-img">
            <img src={pro2} alt="25%"></img>
          </div>
          <div className="process-title">Supply</div>
          <div className="process-body">
            <p>
              Angus Fire UK & Chubb Fire UK are a few of our longterm partners
              we liaise with to procure, refurbish or manufacture to your
              specifications.
            </p>
          </div>
        </div>

        <div className="process4">
          <div className="process-img">
            <img src={pro1} alt="25%"></img>
          </div>
          <div className="process-title">Installation</div>
          <div className="process-body">
            <p>
              We have been installing fire alarms, sprinklers, hosereels, CCTVs
              and other safety and security equipment for well over three
              decades now.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
