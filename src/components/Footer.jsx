import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* First Column: Axis Coding Solution */}
        <div className="column">
          <h3 className="heading">Axis Coding Solution</h3>
          <p className="text">
            Axis Coding Solution where empower your business with cutting-edge web
            solutions, innovative designs, and seamless user experiences crafted by
            experts.
          </p>
          <div className="social-icons">
            <a href="#" className="icon-link">
              {/* Replace with actual Instagram SVG or image */}
              <div className="icon instagram-icon">📷</div>
            </a>
            <a href="#" className="icon-link">
              {/* Replace with actual LinkedIn SVG or image */}
              <div className="icon linkedin-icon">🔗</div>
            </a>
          </div>
        </div>

        {/* Second Column: Services */}
        <div className="column">
          <h3 className="heading">Services</h3>
          <ul className="list">
            <li className="list-item">Web Design & Development</li>
            <li className="list-item">Mobile App Development</li>
            <li className="list-item">Custom Software Solutions</li>
            <li className="list-item">Ecommerce Solutions</li>
            <li className="list-item">Digital Marketing</li>
            <li className="list-item">Search Engine Optimization</li>
          </ul>
        </div>

        {/* Third Column: Our Projects */}
        <div className="column">
          <h3 className="heading">Our Projects</h3>
          <ul className="list">
            <li className="list-item">Legend EHR</li>
            <li className="list-item">sheranwala</li>
            <li className="list-item">Mile Now</li>
            <li className="list-item">Phoenix</li>
            <li className="list-item">Eligent</li>
          </ul>
        </div>

        {/* Fourth Column: Company */}
        <div className="column">
          <h3 className="heading">Company</h3>
          <ul className="list">
            <li className="list-item">FAQs</li>
            <li className="list-item">Terms & Conditions</li>
            <li className="list-item">Privacy Policy</li>
            <li className="list-item">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright and Links */}
      <div className="bottom-section">
        <div className="copyright">
          © 2018-25 Axis Coding Solution, All rights reserved.
        </div>
        <div className="bottom-links">
          <a href="#" className="bottom-link">TERM OF USE</a>
          <a href="#" className="bottom-link">PRIVACY POLICY</a>
          <a href="#" className="bottom-link">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;