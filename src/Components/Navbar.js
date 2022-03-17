import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>CHRISASON FIRE PROTECTION</h1>
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
        <div className="products">Products</div>
        <div className="contact">Contact</div>
      </div>
    </>
  );
}

export default Navbar;
