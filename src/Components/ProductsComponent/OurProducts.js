import React from "react";
import products from "../../Images/products.png";
import hose from "../../Images/hose.png";
import waterhose from "../../Images/waterhose.png";
import firechem from "../../Images/firechem.png";
import foam from "../../Images/foam.png";
import monitor from "../../Images/monitor.png";
import fits from "../../Images/fits.png";
import pumps from "../../Images/pumps.png";
import extin from "../../Images/extin.png";
import systems from "../../Images/systems.png";
import chops from "../../Images/chops.png";
import gears from "../../Images/gears.png";
import more from "../../Images/more.png";

import "./OurProducts.css";

function OurProducts() {
  return (
    <>
      <div className="products-img">
        <img src={products} alt="Homepage"></img>
        <div className="products-text">
          <h1>Our Products</h1>
          <p>
            We have committed our entire existence to quality safety
            engineering..
          </p>
        </div>
        <div className="products-foot">
          <p>
            We have a proven track record of over 30years in the Fire Protection
            Industry with clients including Government bodies, International Oil
            Companies & <br />
            professionally certified engineers that would build and install our
            British standard certified products. Ensuring quality engineering
            for all our clients.
          </p>
        </div>
      </div>

      {/*---------------------------------cards section -------------------------------------*/}
      <div className="whole-flex">
        <div className="product-card-flex">
          <div className="product-card">
            <img src={hose} alt=""></img>
          </div>

          <div className="product-card">
            <img src={waterhose} alt=""></img>
          </div>

          <div className="product-card">
            <img src={firechem} alt=""></img>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <img src={foam} alt=""></img>
          </div>

          <div className="product-card">
            <img src={monitor} alt=""></img>
          </div>

          <div className="product-card">
            <img src={fits} alt=""></img>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <img src={pumps} alt=""></img>
          </div>

          <div className="product-card">
            <img src={extin} alt=""></img>
          </div>

          <div className="product-card">
            <img src={systems} alt=""></img>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <img src={chops} alt=""></img>
          </div>

          <div className="product-card">
            <img src={gears} alt=""></img>
          </div>

          <div className="product-card">
            <img src={more} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
