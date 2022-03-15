import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>CHRISASON FIRE PROTECTION</h1>
      </div>
      <div className="nav-menu">
        <div className="home">Home</div>
        <div className="company">Our Company</div>
        <div className="operations">Operations</div>
        <div className="products">Products</div>
        <div className="contact">Contact</div>
      </div>
    </>
  );
}

export default Navbar;
