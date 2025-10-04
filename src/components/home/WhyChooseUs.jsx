import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/home/WhyChooseUs.css";
import bgImage1 from "../../assets/home/WhyChooseUsABBg.webp";
import bgImage2 from "../../assets/home/WhyChooseUsABBg.webp";

const WhyChooseUs = () => {
  return (
    <div className="wcusab-slider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        grabCursor={true}
        className="wcusab-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="wcusab-slide d-flex align-items-center"
            style={{ backgroundImage: `url(${bgImage1})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-12">
                  <div className="wcusab-content">
                    <h1>
                      See How We Can Help Your{" "}
                      <span className="wcusab-highlight">Business Grow</span>.
                    </h1>
                    <p>
                      We drive growth and expand reach with personalized,
                      data-driven solutions.
                    </p>
                    <a href="/contact" className="wcusab-btn">Start Your Journey</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="wcusab-slide d-flex align-items-center"
            style={{ backgroundImage: `url(${bgImage2})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-12">
                  <div className="wcusab-content">
                    <h1>
                      Unlock Your{" "}
                      <span className="wcusab-highlight">Full Potential</span>.
                    </h1>
                    <p>
                      We craft strategies that boost engagement and ensure
                      long-term digital success.
                    </p>
                    <a href="/contact" className="wcusab-btn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="wcusab-slide d-flex align-items-center"
            style={{ backgroundImage: `url(${bgImage2})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-12">
                  <div className="wcusab-content">
                    <h1>
                      Empowering Your{" "}
                      <span className="wcusab-highlight">Business</span>.
                    </h1>
                    <p>
                      From AI to Blockchain, we deliver future-ready solutions
                      that drive innovation and keep your business ahead.
                    </p>
                    <a href="/about" className="wcusab-btn">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WhyChooseUs;
