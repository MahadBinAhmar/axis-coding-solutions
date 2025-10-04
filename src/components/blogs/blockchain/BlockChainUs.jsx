import React from "react";
import "../../../styles/blogs/blockchain/BlockChainUs.css";
import bgImg from "../../../assets/aboutus/bg.webp"; 

const BlockchainUs = () => { 
  return (
    <section className="block-us-section position-relative">
      {/* Background Image */}
      <div
        className="block-us-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Overlay Content */}
      <div className="block-us-overlay d-flex flex-column justify-content-center align-items-center text-center text-white container">
        <h1 className="block-us-title">Growth of The Blockchain Technology in Market</h1>
      </div>
    </section>
  );
};

export default BlockchainUs;
