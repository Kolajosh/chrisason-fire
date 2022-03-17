import React from "react";
import FireEngine from "../Components/OperationsComponent/FireEngine";
import FireProtection from "../Components/OperationsComponent/FireProtection";
import ORcards from "../Components/OperationsComponent/ORcards";

function Operations() {
  return (
    <>
      <ORcards />
      <FireProtection />
      <FireEngine />
    </>
  );
}

export default Operations;
