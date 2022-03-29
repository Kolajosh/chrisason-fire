import React from "react";
import fireengine from "../../Images/fireengine.png";
import global from "../../Images/global.svg";
import work from "../../Images/work.svg";
import rnd from "../../Images/rnd.svg";
import qa from "../../Images/qa.svg";
import report from "../../Images/report.svg";
import time from "../../Images/time.svg";
import "./FireEngine.css";

function FireEngine() {
  return (
    <>
      <div className="fire-engine-img">
        <img src={fireengine} alt="Homepage"></img>
        <div className="fire-engine-text">
          <h1>Fire Engineering</h1>
          <p>
            Oil & Gas companies all over the globe have trusted us to <br />
            secure their vessels and refineries for over three decades.. why
            shouldn't you?
          </p>
        </div>
      </div>

      <div className="fire-engine-card-section">
        <div className="fire-engine-cards-grid">
          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={global} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Global Clientele</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                Chrisason Fire has built a concrete reputation that exceeds
                Nigeria and has become a trusted brand for international
                organisations operating in Nigeria.
              </p>
            </div>
          </div>

          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={work} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Work Guarantee</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                Throughout our organisation, we have instilled in every memeber
                of our team - the habit of a strong work ethic. We consistently
                deliver time & time again.
              </p>
            </div>
          </div>

          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={time} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Time Milestone</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                We have a very professional workforce that is very focused and
                experienced. We will always endeavour to meet deadlines even
                when it will cost us financially.
              </p>
            </div>
          </div>
        </div>

        <div className="fire-engine-cards-grid">
          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={report} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Client Support</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                Like every good company would say - our clients are the backbone
                of our organisation. In this stead, we always go the extra mile
                to ensure you are completely satisfied with us.
              </p>
            </div>
          </div>

          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={rnd} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Research & Development</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                Focusing more of our expenses on research & development, we
                ensure you get the latest safety technologies to protect &
                safeguard your investments.
              </p>
            </div>
          </div>

          <div className="fire-engine-card">
            <div className="fire-engine-card-icon">
              <img src={qa} alt=""></img>
            </div>
            <div className="fire-engine-card-head">
              <p>Quality Assured</p>
            </div>
            <div className="fire-engine-card-body">
              <p>
                CSafety is a serious issue. To this end - it is imperative that
                your safety consultants and engineers pay close attention to
                detail and have established a reputation for assured quality
                like we have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view section */}

      <div className="fire-engine-card-grid-mobile">
        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={global} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Global Clientele</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              Chrisason Fire has built a concrete reputation that exceeds
              Nigeria and has become a trusted brand for international
              organisations operating in Nigeria.
            </p>
          </div>
        </div>

        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={work} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Work Guarantee</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              Throughout our organisation, we have instilled in every memeber of
              our team - the habit of a strong work ethic. We consistently
              deliver time & time again.
            </p>
          </div>
        </div>
      </div>

      <div className="fire-engine-card-grid-mobile">
        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={time} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Time Milestone</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              We have a very professional workforce that is very focused and
              experienced. We will always endeavour to meet deadlines even when
              it will cost us financially.
            </p>
          </div>
        </div>

        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={report} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Client Support</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              Like every good company would say - our clients are the backbone
              of our organisation. In this stead, we always go the extra mile to
              ensure you are completely satisfied with us.
            </p>
          </div>
        </div>
      </div>

      <div className="fire-engine-card-grid-mobile">
        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={rnd} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Research & Development</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              Focusing more of our expenses on research & development, we ensure
              you get the latest safety technologies to protect & safeguard your
              investments.
            </p>
          </div>
        </div>

        <div className="fire-engine-card">
          <div className="fire-engine-card-icon">
            <img src={qa} alt=""></img>
          </div>
          <div className="fire-engine-card-head">
            <p>Quality Assured</p>
          </div>
          <div className="fire-engine-card-body">
            <p>
              CSafety is a serious issue. To this end - it is imperative that
              your safety consultants and engineers pay close attention to
              detail and have established a reputation for assured quality like
              we have.
            </p>
          </div>
        </div>
      </div>

      <div className="extra-text">
        <div className="left-extra-text">
          <div className="extra-head">We go the extra mile...</div>
          <div className="extra-body">
            Through preventative work, Chrisason Fire engineers and technicians
            can help you protect your employees and assets from fire damage. Our
            fire protection engineers will go the extra mile to ensure that all
            your safety needs and concerns are met and exceeded.
          </div>
        </div>

        <div className="right-extra-text">
          <div className="extra-head">
            Never settle for less than the best..
          </div>
          <div className="extra-body">
            Our fire engineers have been trained in newest and best fire
            prevention techniques to assist in building, installing and
            maintaining fire protection equipment. Our experience range from the
            oil industry, nuclear power plants, aerospace environment and
            terrorism preventative measures.
          </div>
        </div>
      </div>
    </>
  );
}

export default FireEngine;
