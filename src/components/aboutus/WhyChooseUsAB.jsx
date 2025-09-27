import React from "react";
import "../../styles/aboutus/WhyChooseUsAB.css";
import bgImage from "../../assets/aboutus/WhyChooseUsABBg.webp";

const WhyChooseUsAB = () => {
  return (
    <div
      className="wcus-slide d-flex align-items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-lg-6 col-md-8 col-12">
            <div className="wcus-content">
              <h1>
                See How We Can Help Your{" "}
                <span className="wcus-highlight">Business Grow</span>.
              </h1>
              <p>
                Through personalized solutions and data-driven insights, we help
                you to accelerate growth and expand your market reach.
              </p>
              <a href="/contact" className="wcus-btn">Start Your Journey</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsAB;
