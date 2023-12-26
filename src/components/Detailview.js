import Image from "next/image";
import React from "react";

import show from "../assets/showflights/show.svg";
import hotel from '../assets/showflights/hotel.svg'
function Detailview() {
  return (
    <>
      <div className="container views">
        <div className="row gy-4">
          <div className="col-xl-6 col-lg-12">
            <div className="views-flight">
              <div className="flight-detail">
                <h3>Flights</h3>
                <p>
                  Search Flights & Places Hire to our most popular destinations
                </p>
                <button className="btn btn-outline-dark show-btn">
                  <Image src={show} alt="show flights" /> Show Filghts
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="views-hotels">
              <div className="flight-detail">
                <h3>Hotels</h3>
                <p>
                  Search hotels & Places Hire to our most popular destinations
                </p>
                <button className="btn btn-outline-dark show-btn">
                  <Image src={show} alt="show flights" /> Show Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailview;
