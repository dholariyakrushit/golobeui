import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import star from "../assets/reviews/star.svg";
import google from "../assets/reviews/google.svg";
import olga from "../assets/reviews/olga.svg";
import thomas from "../assets/reviews/thomas.svg";
import eliot from "../assets/reviews/eliot.svg";
function Reviews() {
  return (
    <>
      <div className="container reviews">
        <div className="reviews-all">
          <div>
            <h3>Reviews</h3>
            <p>What people says about Golobe facilities</p>
          </div>
          <div className="places-btns">
            <button type="button" class="btn btn-outline-dark places-btn">
              See All
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="reviews-cards">
              <div className="card">
                <h4>“A real sense of community, nurtured”</h4>
                <p className="text">
                  Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.
                </p>
                <button className="btn btn-outline-bark view-more">
                  View more
                </button>
                <div className="star-group">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" className=" img " />
                  <Image src={star} alt="star" className=" img" />
                  <Image src={star} alt="star" className=" img" />
                  <Image src={star} alt="star" className=" img" />
                </div>
                <p className="name">Olga</p>
                <p className="title">Weave Studios – Kai Tak</p>
                <p className="google-logo">
                  <Image src={google} alt="google" />
                  <span className="google">Google</span>
                </p>
                <Image src={olga} alt="olga" className="post img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews-cards">
              <div className="card">
                <h4>“The facilities are superb. Clean, slick, bright.”</h4>
                <p className="text">
                  “A real sense of community, nurtured”Really appreciate the
                  help and support from the staff during these tough times.
                  Shoutout to Katie for helping me always, even when I was out
                  of the country. And always available when needed.View
                  moreOlgaWeave Studios – Kai TakGoogle
                </p>
                <button className="btn btn-outline-bark view-more">
                  View more
                </button>
                <div className="star-group">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                </div>
                <p className="name">Thomas</p>
                <p className="title">Weave Studios – Olympic</p>
                <p className="google-logo">
                  <Image src={google} alt="google" />
                  <span className="google">Google</span>
                </p>
                <Image src={thomas} alt="olga" className="post img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews-cards">
              <div className="card">
                <h4>“A real sense of community, nurtured”</h4>
                <p className="text">
                  Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.
                </p>
                <button className="btn btn-outline-bark view-more">
                  View more
                </button>
                <div className="star-group">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                </div>
                <p className="name">Eliot</p>
                <p className="title">Weave Studios – Kai Tak</p>
                <p className="google-logo">
                  <Image src={google} alt="google" />
                  <span className="google">Google</span>
                </p>
                <Image src={eliot} alt="olga" className="post img-fluid" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews-cards">
              <div className="card">
                <h4>“A real sense of community, nurtured”</h4>
                <p className="text">
                  Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.
                </p>
                <button className="btn btn-outline-bark view-more">
                  View more
                </button>
                <div className="star-group">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                  <Image src={star} alt="star" className="img" />
                </div>
                <p className="name">Olga</p>
                <p className="title">Weave Studios – Kai Tak</p>
                <p className="google-logo">
                  <Image src={google} alt="google" />
                  <span className="google">Google</span>
                </p>
                <Image src={olga} alt="olga" className="post img-fluid" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Reviews;
