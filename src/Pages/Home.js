import React from "react";
import CarouselText from "../Components/HomeComponents/CarouselText";
import Clients from "../Components/HomeComponents/Clients";
import HeroSectionHome from "../Components/HomeComponents/HeroSectionHome";
import HomeCards from "../Components/HomeComponents/HomeCards";
import Process from "../Components/HomeComponents/Process";

export default function Home() {
  return (
    <>
      <HeroSectionHome />
      <CarouselText />
      <Process />
      <Clients />
      <HomeCards />
    </>
  );
}
