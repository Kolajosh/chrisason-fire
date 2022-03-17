import React from "react";
import FireEngine from "../Components/OperationsComponent/FireEngine";
import FireProtection from "../Components/OperationsComponent/FireProtection";
import FireSafety from "../Components/OperationsComponent/FireSafety";
import ORcards from "../Components/OperationsComponent/ORcards";

function Operations() {
  return (
    <>
      <ORcards />
      <FireProtection />
      <FireEngine />
      <FireSafety />
    </>
  );
}

export default Operations;
