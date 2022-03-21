import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Company from "./Pages/Company";
import Operations from "./Pages/Operations";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Company />} />
          <Route exact path="/operations" element={<Operations />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
