import React from "react";
import "../../../styles/blogs/blockchain/BlockChainInfo.css";
import blockImage from "../../../assets/blogs/BlockChainbg.jpg";

const BlockChainInfo = () => {
  return (
    <section className="blockchaininfo-section">
      <div className="container">
        <div className="card blockchaininfo-card border-0 shadow-sm mb-4">
          <img
            src={blockImage}
            alt="Blockchain Growth"
            className="card-img-top blockchaininfo-image"
          />
        </div>

        <div className="blockchaininfo-content text-white">
          <p>
            Blockchain trends are reshaping various business sectors, creating
            fresh avenues for development. Serving as the cornerstone for the
            emerging era of the internet, known as Web3, blockchain has
            fundamentally altered the perception of the digital world. As of the
            final quarter of 2023, blockchain technology continues to maintain
            its popularity and experiences consistent growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockChainInfo;
