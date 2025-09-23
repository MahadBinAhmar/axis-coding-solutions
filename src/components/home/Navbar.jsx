import React, { useState } from "react";
import logo from "../../assets/home/NavLog.webp";
import "../../styles/home/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo on left */}
          <Link className="navbar-brand logo-hover" to="/">
            <img src={logo} alt="Logo" height="70" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* nav-links + button on right */}
          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            } justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center me-2">
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
                <a className="nav-link active" href="/blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <a className="btn get-started-btn" href="#">
              Get Started
            </a>
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

          {/* Right Side - Same Links */}
          <div className="overlay-right">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/service">
              Services
            </Link>
            <Link className="nav-link" to="/ourproject">
              Our Projects
            </Link>
            <Link className="nav-link" to="/blog">
              Blogs
            </Link>{" "}
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
