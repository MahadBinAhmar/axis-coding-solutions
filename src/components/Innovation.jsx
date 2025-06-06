import React from "react";
import "../styles/Innovation.css";
import teamImage from "../assets/bg.jpg"; 

const Innovation = () => {
  return (
    <section className="innovation">
      <div className="innovation-wrapper">
        <div className="innovation-image">
          <img src={teamImage} alt="Team Working" />
        </div>
        <div className="innovation-text">
          <h1>
            Empowering Enterprises with Cutting Edge <br />
            <span>Innovation</span> and <span>Growth.</span>
          </h1>
          <p>
            A Bespoke Technology Development Lab dedicated to helping enterprises harness the power of cutting edge 
            technologies to drive innovation, efficiency, and growth. We understand that the digital landscape is rapidly evolving,
            and businesses and public sector institutions need a trusted partner to navigate this complex terrain.
          </p>
          <hr />
          <div className="stats">
            <div>
              <h2>5K+</h2>
              <p>Project Done</p>
            </div>
            <div>
              <h2>2K+</h2>
              <p>Happy Clients</p>
            </div>
            <div>
              <h2>4.7</h2>
              <p>Client Reviews</p>
            </div>
          </div>
          <hr />
          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Innovation;