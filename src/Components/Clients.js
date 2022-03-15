import React from "react";
import "./Clients.css";
import notore from "../Images/notore.png";
import ge from "../Images/ge.png";
import ffs from "../Images/ffs.png";
import feasr from "../Images/feasr.png";
import nnpc from "../Images/nnpc.png";
import mede from "../Images/mede.png";
import goaks from "../Images/goaks.png";
import exxonmobil from "../Images/exxonmobil.png";
import gofs from "../Images/gofs.png";
import uniuyo from "../Images/uniuyo.png";
import shell from "../Images/shell.png";
import icrc from "../Images/icrc.png";
import fgn from "../Images/fgn.png";
import eni from "../Images/eni.png";
import chevron from "../Images/chevron.png";
import total from "../Images/total.png";

function Clients() {
  return (
    <>
      <div className="logo-flex">
        <div className="logo-head">
          <h1>Some Clients</h1>
        </div>
        <div className="logo-block">
          <div className="logo">
            <img src={notore} alt=""></img>
          </div>
          <div className="logo">
            <img src={ge} alt=""></img>
          </div>
          <div className="logo">
            <img src={ffs} alt=""></img>
          </div>
          <div className="logo">
            <img src={feasr} alt=""></img>
          </div>
          <div className="logo">
            <img src={nnpc} alt=""></img>
          </div>
          <div className="logo">
            <img src={mede} alt=""></img>
          </div>
          <div className="logo">
            <img src={goaks} alt=""></img>
          </div>
          <div className="logo">
            <img src={exxonmobil} alt=""></img>
          </div>
        </div>
        <div className="logo-block">
          <div className="logo">
            <img src={gofs} alt=""></img>
          </div>
          <div className="logo">
            <img src={uniuyo} alt=""></img>
          </div>
          <div className="logo">
            <img src={shell} alt=""></img>
          </div>
          <div className="logo">
            <img src={icrc} alt=""></img>
          </div>
          <div className="logo">
            <img src={fgn} alt=""></img>
          </div>
          <div className="logo">
            <img src={eni} alt=""></img>
          </div>
          <div className="logo">
            <img src={chevron} alt=""></img>
          </div>
          <div className="logo">
            <img src={total} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
