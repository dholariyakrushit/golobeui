import Image from "next/image";
import React from "react";

// import istanbul from "../assets/plantrip/istanbul.svg";
import dot from "../assets/plantrip/dot.svg";
import sydney from "../assets/plantrip/sydney.svg";
import baku from "../assets/plantrip/baku.svg";
import male from "../assets/plantrip/male.svg";
import paris from "../assets/plantrip/paris.svg";
import newyork from "../assets/plantrip/newyork.svg";
import london from "../assets/plantrip/london.svg";
import tokyo from "../assets/plantrip/tokyo.svg";
import dubai from "../assets/plantrip/dubai.svg";
function PlanTrip() {
  return (
    <>
      <div className="container plantrip">
        <div className="plantrip-perfect">
          <div>
            <h3>Plan your perfect trip</h3>
            <p>Search Flights & Places Hire to our most popular destinations</p>
          </div>
          <div className="places-btns">
            <button type="button" class="btn btn-outline-dark places-btn">
              See more places
            </button>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={tokyo} alt="img" />
                <div>
                  <p className="city-name">Istanbul, Turkey</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={sydney} alt="img" />
                <div>
                  <p className="city-name">Sydney, Australia</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={baku} alt="img" />
                <div>
                  <p className="city-name">Baku, Azerbaijan</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={male} alt="img" />
                <div>
                  <p className="city-name">Malé, Maldives</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={paris} alt="img" />
                <div>
                  <p className="city-name">Paris, France</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={newyork} alt="img" />
                <div>
                  <p className="city-name">New York, US</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={london} alt="img" />
                <div>
                  <p className="city-name">London, UK</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={tokyo} alt="img" />
                <div>
                  <p className="city-name">Tokyo, Japan</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="citys">
              <div className="citys-detail">
                <Image src={dubai} alt="img" />
                <div>
                  <p className="city-name">Dubai, UAE</p>
                  <p className="city-place">
                    Flights <Image src={dot} alt="dot" /> Hotels{" "}
                    <Image src={dot} alt="dot" /> Resorts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanTrip;
