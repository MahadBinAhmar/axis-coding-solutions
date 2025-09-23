import React from "react";
import "../../styles/blogs/BlogUs.css";
import bgImg from "../../assets/blogs/bg.webp"; 

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
        <h1 className="hero-us-title">Blogs</h1>
        <p className="hero-us-subtitle mt-3">
          Tailored Solutions for Your Digital Success.
        </p>
      </div>
    </section>
  );
};

export default HeroUs;
