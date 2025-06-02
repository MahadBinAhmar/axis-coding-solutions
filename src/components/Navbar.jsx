import React from 'react';
import logo from '../assets/logo.png'; 
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand logo-hover" href="#">
          <img src={logo} alt="Logo" height="50"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center mx-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">About Us</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/web-app-development/">Web App Development</a></li>
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/mobile-app-development/">Mobile App Development</a></li>
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/custom-software-solutions/">Custom Software Solutions</a></li>
                <li><a className="dropdown-item" href="https://visiocell.com/services/bespoke-enterprise-integrated-system/">Bespoke Enterprise Integrated System</a></li>
                <li><a className="dropdown-item" href="https://visiocell.com/services/ai-machine-learning-data-analytics/">Al Machine Learning & Data Analytics</a></li>
                <li><a className="dropdown-item" href="https://visiocell.com/services/data-cyber-security/">Data & Cyber Security</a></li>
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/ecommerce-solutions/">Ecommerce Solutions</a></li>
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/digital-marketing/">Digital Marketing</a></li>
                <li><a className="dropdown-item" href="https://visiocell.axiscodingsolutions.com/services/search-engine-optimization/">Search Engine Optimization</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link active" href="https://visiocell.com/our-projects/">Our Projects</a></li>
            <li className="nav-item"><a className="nav-link active" href="https://visiocell.com/blog/">Blogs</a></li>
            <li className="nav-item"><a className="nav-link active" href="https://xytech.io/contact-us/">Contact Us</a></li>
          </ul>

          <div className="ms-auto pe-2">
            <a className="btn get-started-btn" href="https://xytech.io/contact-us/">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
