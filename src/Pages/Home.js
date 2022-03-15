import React from "react";
import CarouselText from "../Components/CarouselText";
import Clients from "../Components/Clients";
import HeroSectionHome from "../Components/HeroSectionHome";
import Process from "../Components/Process";

function Home() {
  return (
    <>
      <HeroSectionHome />
      <CarouselText />
      <Process />
      <Clients />
    </>
  );
}

export default Home;
