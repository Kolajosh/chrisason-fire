import React from "react";
import "./HomeCards.css";
import fireengineering from "../../Images/fireengineering.png";
import marineengineering from "../../Images/marineengineering.png";
import fireinstallations from "../../Images/fireinstallations.png";

function HomeCards() {
  return (
    <>
      <div className="card-heading">
        <h1>Services</h1>
      </div>
      <div className="card-grid">
        <div className="card">
          <div className="card-img">
            <img src={fireengineering} alt=""></img>
          </div>
          <div className="card-text">
            <p className="ptitle">Fire Engineering</p>
            <p>
              Improving the safety of your employees and assets is our main
              priority; allowing you to focus on other critical aspects of your
              firm
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={marineengineering} alt=""></img>
          </div>
          <div className="card-text">
            <p className="ptitle">Marine Engineering</p>
            <p>
              Improving the safety of your employees and assets is our main
              priority; allowing you to focus on other critical aspects of your
              firm
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={fireinstallations} alt=""></img>
          </div>
          <div className="card-text">
            <p className="ptitle">Fire Installation</p>
            <p>
              Improving the safety of your employees and assets is our main
              priority; allowing you to focus on other critical aspects of your
              firm
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCards;
