import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/blogs/future/FutureCards.css";
import img1 from "../../../assets/blogs/1.webp";
import img2 from "../../../assets/blogs/2.webp";

const FutureCards = () => {
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
      title: "Growth of The Blockchain Technology in Market",
      link: "/block",
    },
  ];

  return (
    <div className="futurecards-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-start">
          {data.map((card) => (
            <div key={card.id} className="col-md-4">
              <div className="futurecard">
                <div className="futurecard-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="futurecard-text">
                  <p>{card.title}</p>
                  <Link to={card.link} className="future-learn-btn">
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

export default FutureCards;
