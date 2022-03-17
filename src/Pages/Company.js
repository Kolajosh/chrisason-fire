import React from "react";
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
