import React from "react";
import foot1 from "../Images/foot1.png";
import foot2 from "../Images/foot2.png";
import foot3 from "../Images/foot3.png";
import foot4 from "../Images/foot4.png";
import foot5 from "../Images/foot5.png";
import foot6 from "../Images/foot6.png";
import foot7 from "../Images/foot7.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-1">
        <div className="left-text-foot">
          <p>
            <span className="bold">CHRISASON FIRE PROTECTION LTD</span>
            <br />
            Over 260,000hours exPirtising in Fire Engineering
            <br /> Since 1987 we have been providing Africa with easy access to
            safety technology
          </p>
        </div>
        <div className="right-text-foot">
          Email: info@chrisasonfire.com <br />
          Work: +234 803 335 6183
        </div>
      </div>

      <div className="footer-2">
        <div className="foot-img">
          <img src={foot1} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot2} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot3} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot4} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot5} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot6} alt=""></img>
        </div>
        <div className="foot-img">
          <img src={foot7} alt=""></img>
        </div>
      </div>

      <div className="footer-3">
        <div className="left-text-3">
          <p>
            Terms of use | Privacy Policy | © 1987 - 2021. Chrisason Fire
            Protection LTD. All Rights Reserved.
          </p>
        </div>
        <div className="right-text-3">
          <i class="fab fa-linkedin "></i>
          <i class="fab fa-twitter "></i>
          <i class="fab fa-youtube "></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
