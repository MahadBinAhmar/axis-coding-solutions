import React from "react";
import "../../styles/blogs/Cards.css";
import img1 from "../../assets/blogs/1.webp";
import img2 from "../../assets/blogs/2.webp";
import img3 from "../../assets/blogs/3.webp";

const Cards = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "The Potential Impact of AI In The Middle East",
    },
    {
      id: 2,
      img: img2,
      title: "Growth of The Blockchain Technology in Market",
    },
    {
      id: 3,
      img: img3,
      title: "Role Of Technology In Future And Its Impact",
    },
  ];

  return (
    <div className="cards-section py-5">
      <div className="container">
        <div className="row g-4">
          {data.map((card) => (
            <div key={card.id} className="col-md-4">
              <div className="custom-card">
                <div className="card-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-text">
                  <p>{card.title}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
