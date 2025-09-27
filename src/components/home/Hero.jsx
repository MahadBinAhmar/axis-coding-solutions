import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/Hero.css";
import bg from "../../assets/home/bg.mp4";

const Hero = () => {
  return (
    <section className="hero-section position-relative">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <h1 className="hero-title m-0">Driving</h1>
          <h1 className="hero-title-1 m-0 ms-2">Digital</h1>
        </div>
        <h1 className="hero-title-1">Transformation</h1>
        <h1 className="hero-title-2">Through Innovation</h1>
        <p className="hero-subtitle">
          Empower your business with cutting-edge web solutions, innovative{" "}
          <br />
          designs, and seamless user experiences crafted by experts.
        </p>
        <div className="hero-buttons mt-3">
          <a href="/contact" className="btn get-started-btn me-3">
            Get Started
          </a>
          <a href="/about" className="btn explore-portfolio-btn">
            Explore Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
