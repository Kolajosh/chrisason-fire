import React from "react";
import { Helmet } from "react-helmet";
import Careers from "../Components/CompanyComponents/Careers";
import CompanySlider from "../Components/CompanyComponents/CompanySlider";
import CSR from "../Components/CompanyComponents/CSR";
import HeroSectionCompany from "../Components/CompanyComponents/HeroSectionCompany";
import Mission from "../Components/CompanyComponents/Mission";
import MoreAbout from "../Components/CompanyComponents/MoreAbout";
import WhoWeAre from "../Components/CompanyComponents/WhoWeAre";

function Company() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Chrisasonfire</title>
        <link rel="canonical" href="https://www.chrisasonfire.com/about/" />
        <meta
          name="description"
          content="Chrisason Fire is an indigenous Nigerian firm involved in importation, assembling, supply, installation and maintenance of various types of Fire Protection, Fire Fighting, Engineering, Fire Detection Equipment and Systems throughout the nation..."
        />
        <meta
          name="keywords"
          content="engineering, fire safety, fire Consultng, Startups, About, engine, chrisason info, Chrisasonfire, chrisason"
        />
      </Helmet>
      <HeroSectionCompany />
      <WhoWeAre />
      <Mission />
      <MoreAbout />
      <CSR />
      <Careers />
      <CompanySlider />
    </>
  );
}

export default Company;
