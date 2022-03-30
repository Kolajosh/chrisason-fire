import React from "react";
import { Helmet } from "react-helmet";
import Form from "../Components/ContactComponent/Form";

function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Chrisasonfire</title>
        <link rel="canonical" href="https://www.chrisasonfire.com/contact/" />
        <meta name="description" content="Contact Us at Chriasason Fire" />
        <meta
          name="keywords"
          content="contact, engineering, fire safety, fire Consultng, Startups, About, engine, chrisason info, Chrisasonfire, chrisason, chrisason contact"
        />
      </Helmet>
      <Form />
    </>
  );
}

export default Contact;
