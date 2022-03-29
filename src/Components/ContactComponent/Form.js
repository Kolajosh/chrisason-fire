import React, { useState, useEffect } from "react";
import "./Form.css";
import map from "../../Images/map.png";
import emailjs from "emailjs-com";

function Form(props) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.phone
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      emailjs
        .sendForm(
          "service_017ymhr",
          "template_envdqpg",
          e.target,
          "user_sc09DmLC2475WRQJDOeWU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setFormErrors(validate(formValues));
    setFormValues(initialValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.message) {
      errors.message = "Kindly input your message here";
    }

    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.phone
    ) {
      errors.submit = "Message not sent";
    } else {
      errors.yesSubmit = "Message Sent";
    }

    return errors;
  };

  return (
    <>
      <div className="contact-img">
        <img src={map} alt="Homepage"></img>
      </div>

      <div className="contact-head">
        <h1>Connect with us</h1>
      </div>

      <div className="contact-form">
        <form action="" className="form" onSubmit={sendEmail}>
          <div className="form-flex">
            <div className="form1">
              <div className="left-form">
                <p className="t-red">{formErrors.name}</p>
                <input
                  className="cfield"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <div className="left-form">
                <p className="t-red">{formErrors.email}</p>
                <input
                  className="cfield"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="left-form">
                <p className="t-red">{formErrors.phone}</p>
                <input
                  className="cfield"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form2">
              <p className="t-red">{formErrors.message}</p>
              <textarea
                className="mfield"
                rows="9"
                type="text"
                name="message"
                placeholder="Message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-button">
            <button className="form-btn">
              Submit <i class="fas fa-caret-right"></i>
            </button>
            <p className="t-red">{formErrors.submit}</p>
            <p className="t-green">{formErrors.yesSubmit}</p>
          </div>
        </form>
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
