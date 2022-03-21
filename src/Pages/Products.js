import React from "react";
import Fabrication from "../Components/ProductsComponent/Fabrication";
import HSE from "../Components/ProductsComponent/HSE";
import OurProducts from "../Components/ProductsComponent/OurProducts";
import Refurbish from "../Components/ProductsComponent/Refurbish";

function Products() {
  return (
    <>
      <OurProducts />
      <Fabrication />
      <Refurbish />
      <HSE />
    </>
  );
}

export default Products;
