import React from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt=""></img>
        <p>CHRISASON FIRE PROTECTION</p>
      </div>
      <div className="nav-menu">
        <div className="home">
          <a href="/">Home</a>
        </div>
        <div className="company">
          <a href="/about">Our Company</a>
        </div>
        <div className="operations">
          <a href="/operations"> Operations</a>
        </div>
        <div className="products">
          <a href="/products">Products</a>
        </div>
        <div className="contact">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
