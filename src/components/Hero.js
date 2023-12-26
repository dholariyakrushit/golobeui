import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className="hero">
      <div className="stays">
        <NavBar />
        <div className="hero-title">
          <p className="help-others">Helping Others</p>
          <p className="live-travel">Live & Travel</p>
          <p className="offers">Special offers to suit your plan</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
