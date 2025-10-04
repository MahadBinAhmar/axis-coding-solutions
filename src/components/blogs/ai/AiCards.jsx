import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/blogs/ai/AiCards.css";
import img1 from "../../../assets/blogs/2.webp";
import img2 from "../../../assets/blogs/3.webp";

const AiCards = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Growth of The Blockchain Technology in Market",
      link: "/block",
    },
    {
      id: 2,
      img: img2,
      title: "Role Of Technology In Future And Its Impact",
      link: "/future",
    },
  ];

  return (
    <div className="aicards-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-start">
          {data.map((card) => (
            <div key={card.id} className="col-md-4">
              <div className="aicustom-card">
                <div className="aicard-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="aicard-text">
                  <p>{card.title}</p>
                  <Link to={card.link} className="ailearn-more-btn">
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

export default AiCards;
