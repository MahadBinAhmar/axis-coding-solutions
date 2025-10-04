import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/blogs/blockchain/BlockChainCards.css";
import img1 from "../../../assets/blogs/1.webp";
import img2 from "../../../assets/blogs/3.webp";

const BlockCards = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "The Potential Impact of AI In The Middle East",
      link: "/ai",
    },
    {
      id: 2,
      img: img2,
      title: "Role Of Technology In Future And Its Impact",
      link: "/future",
    },
  ];

  return (
    <div className="blockcards-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-start">
          {data.map((card) => (
            <div key={card.id} className="col-md-4">
              <div className="blockcard">
                <div className="blockcard-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="blockcard-text">
                  <p>{card.title}</p>
                  <Link to={card.link} className="block-learn-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockCards;
