import React from "react";
import "./Form.css";
import map from "../../Images/map.png";

function Form() {
  return (
    <>
      <div className="contact-img">
        <img src={map} alt="Homepage"></img>
      </div>

      <div className="contact-head">
        <h1>Connect with us</h1>
      </div>

      <div className="contact-form">
        <form action="" className="form" onSubmit="">
          <div className="form-flex">
            <div className="form1">
              <div className="left-form">
                <input
                  className="cfield"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="left-form">
                <input
                  className="cfield"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="left-form">
                <input
                  className="cfield"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="form2">
              <textarea
                className="mfield"
                rows="9"
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="form-button">
        <button className="form-btn">
          Submit <i class="fas fa-caret-right"></i>
        </button>
      </div>

      <div className="contact-details">
        <div className="details-head">
          <h2>Find us</h2>
        </div>
        <div className="details-body">
          <p>
            HQ: Chrisason Fire Protection Limited.
            <br />
            98 Ikwerre Road. Port Harcourt.
            <br />
            Rivers State. Nigeria.
            <br />
            E: info@chrisasonfire.com
            <br />
            ​M: +234 (0) 803 335 6 183
            <br />
            M: +234 (0) 806 578 4 615
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
