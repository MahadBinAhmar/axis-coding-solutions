import React from "react";
import "../../../styles/blogs/future/FutureUs.css";
import bgImg from "../../../assets/aboutus/bg.webp"; 

const FutureUs = () => { 
  return (
    <section className="future-us-section position-relative">
      {/* Background Image */}
      <div
        className="future-us-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Overlay Content */}
      <div className="future-us-overlay d-flex flex-column justify-content-center align-items-center text-center text-white container">
        <h1 className="future-us-title">Role Of Technology In Future And Its Impact</h1>
      </div>
    </section>
  );
};

export default FutureUs;
