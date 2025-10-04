import React from "react";
import "../../../styles/blogs/ai/AiUs.css";
import bgImg from "../../../assets/aboutus/bg.webp"; 

const AiUs = () => { 
  return (
    <section className="ai-us-section position-relative">
      {/* Background Image */}
      <div
        className="ai-us-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Overlay Content */}
      <div className="ai-us-overlay d-flex flex-column justify-content-center align-items-center text-center text-white container">
        <h1 className="ai-us-title">The Potential Impact of AI In The Middle East</h1>
      </div>
    </section>
  );
};

export default AiUs;
