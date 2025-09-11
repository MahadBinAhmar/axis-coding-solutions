import React from "react";
import "../../styles/home/Innovation.css";
import teamImage from "../../assets/home/innovation.webp";

const Innovation = () => {
  return (
    <section className="innovation">
      <div className="container">
        <div className="row align-items-center innovation-wrapper">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 innovation-image">
            <img
              src={teamImage}
              alt="Team Working"
              className="img-fluid rounded"
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-6 col-md-12 innovation-text">
            <h1>
              Empowering Enterprises with Cutting Edge <br />
              <span>Innovation</span> and <span>Growth.</span>
            </h1>
            <p>
              A Bespoke Technology Development Lab dedicated to helping
              enterprises harness the power of cutting edge technologies to
              drive innovation, efficiency, and growth. We understand that the
              digital landscape is rapidly evolving, and businesses and public
              sector institutions need a trusted partner to navigate this
              complex terrain.
            </p>
            <hr />

            {/* Stats Section */}
            <div className="row text-center stats">
              <div className="col-4">
                <h2>5K+</h2>
                <p>Project Done</p>
              </div>
              <div className="col-4">
                <h2>2K+</h2>
                <p>Happy Clients</p>
              </div>
              <div className="col-4">
                <h2>4.7</h2>
                <p>Client Reviews</p>
              </div>
            </div>
            <hr />

            <button className="discover-btn">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
