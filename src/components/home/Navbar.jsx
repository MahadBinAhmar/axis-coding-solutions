import React, { useState } from "react";
import logo from "../../assets/home/logo.webp";
import "../../styles/home/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../aboutus/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Blur Transparent Navbar */}
      <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand logo-hover" href="#">
            <img src={logo} alt="Logo" height="70" />
          </a>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Normal Links (Desktop View) */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Our Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="ms-auto pe-2">
              <a className="btn get-started-btn" href="#">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay for Mobile */}
      <div className={`overlay ${menuOpen ? "overlay-open" : ""}`}>
        <button className="btn-close-overlay" onClick={toggleMenu}>
          &times;
        </button>
        <div className="overlay-content">
          {/* Left Side */}
          <div className="overlay-left">
            <img src={logo} alt="Logo" className="overlay-logo" />
            <p>
              Design Direction02 <br />
              Design Street <br />
              London
            </p>
            <a href="mailto:hello@designdirection.com">cycsol@gmail.com</a>
          </div>

          {/* Right Side - SAME LINKS */}
          <div className="overlay-right">
            <Link className="nav-link" to="/">
                  Home
                </Link>
            <Link className="nav-link" to="/about">
                  About Us
                </Link>
            <a href="#">Services</a>
            <a href="#">Our Projects</a>
            <a href="#">Blogs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
