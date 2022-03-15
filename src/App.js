import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
