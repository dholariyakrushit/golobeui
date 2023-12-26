import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import flights from "../assets/showflights/flights.svg";
import stays from "../assets/showflights/stays.svg";
import city from "../assets/showflights/city.svg";
import show from "../assets/showflights/show.svg";
import plush from "../assets/showflights/plush.svg";
function Showfligth() {
  return (
    <div className="container showfligth-container">
      <div className="showfligth">
        <div className="flex-flights">
          <p className="flights">
            <Image src={flights} alt="flights" className="me-2" />
            Flights
          </p>
          <div className="fligts-border-stays"></div>
          <p className="stays">
            <Image src={stays} alt="stays" className="me-2" />
            Stays
          </p>
        </div>
        <div className=" trip-detail ">
          <div className="from-to">
            <p>From - To</p>
            <div className="city ">
              <div>Lahore - Karachi</div>
              <Image src={city} alt="city" className="ms-auto" />
            </div>
          </div>
          <div className="trip">
            <p className="trip-title">Trip</p>
            <Dropdown as={ButtonGroup}>
              <div className="return-trip">
                <span variant="ligth" className="border-0 return py-3 px-3">
                  Return
                </span>
                <Dropdown.Toggle
                  split
                  variant="ligth"
                  id="dropdown-split-basic"
                  className="border-0 mx-3 "
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>{" "}
            </Dropdown>
          </div>
          <div className="depart-return">
            <p>Depart- Return</p>
            <div className="date">07 Nov 22 - 13 Nov 22</div>
          </div>
          <div className="passenger-class">
            <p>Passenger - Class</p>
            <div className="passenger">1 Passenger, Economy</div>
          </div>
        </div>
        <div className="button-con ">
          <button type="button" className="btn btn-outline-dark add-promo-btn">
            <Image src={plush} alt="show flights" /> Add Promo Code
          </button>
          <button type="button" className="btn btn-outline-dark add-promo-btn">
            <Image src={show} alt="show flights" /> Show Filghts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showfligth;
