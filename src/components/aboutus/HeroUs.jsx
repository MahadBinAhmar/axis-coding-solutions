import React from "react";
import "../../styles/aboutus/HeroUs.css";
import bgImg from "../../assets/aboutus/bg.webp"; 

const HeroUs = () => {
  return (
    <section className="hero-us-section position-relative">
      {/* Background Image */}
      <div
        className="hero-us-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Overlay Content */}
      <div className="hero-us-overlay d-flex flex-column justify-content-center align-items-center text-center text-white container">
        <h1 className="hero-us-title">About Us</h1>
        <p className="hero-us-subtitle mt-3">
          Your Partner in Innovative Web Design.
        </p>
      </div>
    </section>
  );
};

export default HeroUs;
