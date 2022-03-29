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
            <div className="pc-img">
              <img src={hose} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Hose</b>
              <p>
                We specialise in Angus Hosereels. The world’s original and best
                maintenance-free fire hose, exceeds BS 6391:2009 Type 3 and
                Kitemarked. A strong, lightweight covered hose combining high
                performance with affordability.
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="pc-img">
              <img src={waterhose} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Water Deivery Hose</b>
              <p>
                Hi-Vol large-diameter hose offers an efficient means of
                delivering critical water supplies during an emergency when
                water resources are limited or non-existent. Hivolite is
                constructed from specially formulated high grade synthetic
                rubber, extruded through an all-synthetic woven jacket, to
                provide maximum resistance to abrasion, UV and weathering.
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="pc-img">
              <img src={firechem} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Fighting Chemicals</b>
              <p>
                Chrisason Fire only uses Angus Fire foams. Angus Fire maintains
                its position at the forefront of firefighting foam technology
                through continuous investment in research and development. You
                can rely on Chrisason Fire to provide foams of the highest
                firefighting performance with low environmental impact.
              </p>
            </div>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <div className="pc-img">
              <img src={foam} alt=""></img>
              <div className="pc-text">
                <b>Foam Equipment</b>
                <p>
                  Rapid and affordable fire protection for sites where flammable
                  and hazardous liquids are stored or processed. Ideal for rapid
                  deployment of foam to flammable liquid fires and chemical
                  spills. A full range of fixed foam system equipment, including
                  the Polaris range of water-powered foam induction motors.
                </p>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="pc-img">
              <img src={monitor} alt=""></img>
              <div className="pc-text">
                <b>Monitors</b>
                <p>
                  We have three types of Monitors: Portable, Mobile & Fixed.
                  Portable: Lightweight monitors for quick and easy deployment
                  with excellent stability in use and easy storage. Mobile:
                  Trailer-mounted monitors are ideal for proteting locations
                  inadequately covered by fixed monitors and provide a highly
                  flexible addition to any fire service armoury of equipment.
                  Fixed: We stock lever operated, oscillating and remote control
                  monitors
                </p>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="pc-img">
              <img src={fits} alt=""></img>
              <div className="pc-text">
                <b>Fire Fittings</b>
                <p>
                  We have three types of fitting: The Osprey, The Harrier & The
                  Falcon The Osprey Selectable Flow Water and Foam Nozzle
                  provides a range of flow combinations without having to leave
                  the area of the incident to change nozzle. Flow rate from 360
                  - 750 l/min @ 7 Bar Harrier: 115 - 475 l/min @ 7 Bar Falcon:
                  360 - 950 litre/min @ 7 Bar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <div className="pc-img">
              <img src={pumps} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Portable Pumps</b>
              <p>
                We stock a variety of fire pumps ranging from Diesel: LDA400,
                LDA600 & LD1800 Petrol: LWA500 MK2, LWA800, AP800, LWA1200 &
                LW2275 All our Angus Pumps come with state of the art engines
                and are full electronic control with diagnostics utilising the
                new EDI EPM. They combine the benefits of high pressure fire
                fighting performance with the ability to move large volumes of
                water continuously.
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="pc-img">
              <img src={extin} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Extinguisher</b>
              <p>
                We stock two major types of extinguishers: Portable & Mobile.
                Portable: Our range of portable fire extinguishers is BSI
                Kitemark approved to the European Standard EN3. Mobile: Our
                comprehensive selection of mobile fire extinguishes is ideal for
                a wide range of industrial applications.
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="pc-img">
              <img src={systems} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Engineering Systems</b>
              <p>
                Our fire system application solutions range from: Offshore
                platfroms; Helidecks, helipads, hangers; Floating production &
                transport; Docks & Jetties; Petrochemical plants; Tank storage
                farms & Liquefied Natural Gas (LNG).
              </p>
            </div>
          </div>
        </div>

        <div className="product-card-flex">
          <div className="product-card">
            <div className="pc-img">
              <img src={chops} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Engines & Choppers</b>
              <p>
                Getting engines for your city or state needs a special expertise
                only very few fire protection companies can handle. We have
                supplied a few governmental bodies and institutions fire engines
                and apparatus and can assist in consulting and procuring the
                engines that would best suite your community's needs. Get in
                touch with our team today. We are always happy to help.
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="pc-img">
              <img src={gears} alt=""></img>
            </div>
            <div className="pc-text">
              <b>Fire Fighting Gears</b>
              <p>
                Chrisason Fire has been supplying several International Oil
                Companies (IOCs) and Governmental bodies fire gears for decades.
                All our gears are premium equipment manufactured to the
                strictest EU regulatory standards, to ensure the safety of your
                fire fighters. Our gears range from fire suits, fire helmets,
                fire gloves, fire gloves and socks, oxygen tanks, to mention but
                a few..
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="pc-img">
              <img src={more} alt=""></img>
            </div>
            <div className="pc-text">
              <b>& Much More</b>
              <p>
                Looked through our website and still cannot find what you are
                looking for? Get in touch with our team. You can find our
                details on our contact page. Even if we do not have what you are
                after, we could direct you to one of our partners or a
                likeminded competitor who may be able to better meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
