import React from "react";
import CarouselText from "../Components/CarouselText";
import Clients from "../Components/Clients";
import HeroSectionHome from "../Components/HeroSectionHome";
import HomeCards from "../Components/HomeCards";
import Process from "../Components/Process";

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
