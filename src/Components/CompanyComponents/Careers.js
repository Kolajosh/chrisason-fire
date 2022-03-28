import React from "react";
import careers from "../../Images/careers.png";
import "./Careers.css";

function Careers() {
  return (
    <>
      <div className="careers-main">
        <div className="careers-img">
          <img src={careers} alt=""></img>
        </div>
      </div>
      <div className="careers-text">
        <div className="light-text">
          <p>
            As the demand for our services grows, so our demand for fire
            protection engineers continues to grow. We are very forused in
            providing excellent training and development for our team members,
            increasing their career opportunities and offerring them a chance to
            grow. We recruite the best technicians and train them up to be build
            experience and develop them to become engineers. Our fire protection
            engineers job roles vary from analysing existing protection measures
            to designing up-to-date fire protection systems.
          </p>
        </div>
        <div className="bold-text">
          <b>
            Fire protection is a well-paying career with a variety of
            adaptability including: government, consulting engineering firms,
            the petrochemical industry, the entertainment industry, insurance
            companies, federal agencies, healthcare facilities, code enforcement
            agencies, and many other areas.
          </b>
        </div>
      </div>
      <div className="careers-black">
        <div className="careers-black-left">
          <p>Fire Engineer Technician</p>
          <br /> <br />
          <p>
            To join as a technician, we require responsibility, strict attention
            to detail, and good communication skills embedded well in your
            personality. If you're up for the challenge, please forward your CV
            & Cover letter to info@chrisasonfire.com and a member of our team
            will get back to you
          </p>
        </div>
        <div className="careers-black-right">
          <p>Prospective Application</p> <br /> <br />
          <p>
            Please forward your CV & Cover letter to info@chrisasonfire.com and
            a member of our team will get back to you should a position come up
            that suits your experience & skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default Careers;
