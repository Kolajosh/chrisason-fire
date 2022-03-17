import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Company from "./Pages/Company";
import Operations from "./Pages/Operations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Company />} />
          <Route exact path="/operations" element={<Operations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
