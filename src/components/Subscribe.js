import React from "react";
import Image from "next/image";

import group from "../assets/subscribe/gruop.svg";
import logo from "../assets/subscribe/logo.svg";
import twitter from "../assets/subscribe/twitter.svg";
import facbook from "../assets/subscribe/facbook.svg";
import youtube from "../assets/subscribe/youtube.svg";
import instagram from "../assets/subscribe/instagram.svg";
function Subscribe() {
  return (
    <>
      <div className="container subscribes">
        <div className="subscribe">
          <div className="row">
            <div className="col-lg-6">
              <div className="travel">
                <h2>Subscribe Newsletter</h2>
                <p className="the-travel">The Travel</p>
                <p className="text">
                  Get inspired! Receive travel discounts, tips and behind the
                  scenes stories.
                </p>
                <form>
                  <input type="email" placeholder="Your email address" />
                  <button className="btn btn-dark">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src={group} alt="logo" className="img img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-aline text-center text-lg-start">
          <div className="row gy-5 ">
            <div className="col-lg-2 col-md-6 col-sm-12 ps-4">
              <Image src={logo} alt="logo" />
              <div className="mt-4">
                <Image src={facbook} alt="facbook" />
                <Image src={twitter} alt="twitter" className="img" />
                <Image src={youtube} alt="youtube" className="img" />
                <Image src={instagram} alt="instagram" className="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 ">
              <p className="title">Our Destinations</p>
              <p className="text">Canada</p>
              <p className="text">Alaksa</p>
              <p className="text">France</p>
              <p className="text">Iceland</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <p className="title">Our Activities</p>
              <p className="text">Northern Lights</p>
              <p className="text">Cruising & sailing</p>
              <p className="text">Multi-activities</p>
              <p className="text">Multi-activities</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <p className="title">Travel Blogs</p>
              <p className="text">Bali Travel Guide</p>
              <p className="text">Sri Lanks Travel Guide</p>
              <p className="text">Peru Travel Guide</p>
              <p className="text">Bali Travel Guide</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <p className="title">About Us</p>
              <p className="text">Our Story</p>
              <p className="text">Work with us</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <p className="title">Contact Us</p>
              <p className="text">Our Story</p>
              <p className="text">Work with us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
