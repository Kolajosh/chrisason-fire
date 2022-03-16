import React from "react";
import Careers from "../Components/Careers";
import CSR from "../Components/CSR";
import HeroSectionCompany from "../Components/HeroSectionCompany";
import Mission from "../Components/Mission";
import MoreAbout from "../Components/MoreAbout";
import WhoWeAre from "../Components/WhoWeAre";

function Company() {
  return (
    <>
      <HeroSectionCompany />
      <WhoWeAre />
      <Mission />
      <MoreAbout />
      <CSR />
      <Careers />
    </>
  );
}

export default Company;
