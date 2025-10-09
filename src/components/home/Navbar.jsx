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
      {/* ✅ Transparent Glass Navbar */}
      <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link className="navbar-brand logo-hover" to="/">
            <img src={logo} alt="Logo" height="70" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler border-0 custom-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <i className="bi bi-list" style={{ color: "#FF7E30", fontSize: "32px" }}></i>
          </button>

          {/* Nav Links (Desktop View) */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""} justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center me-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourproject">Our Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <a className="btn get-started-btn" href="/contact">Get Started</a>
          </div>
        </div>
      </nav>

      {/* ✅ Single Fullscreen Overlay (Mobile) */}
      <div className={`overlay ${menuOpen ? "overlay-open" : ""}`}>
        <button className="btn-close-overlay" onClick={toggleMenu}>
          &times;
        </button>
        <div className="overlay-content">
          <div className="overlay-left">
            <img src={logo} alt="Logo" className="overlay-logo" />
          </div>

          <div className="overlay-right">
            <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
            <Link className="nav-link" to="/about" onClick={toggleMenu}>About Us</Link>
            <Link className="nav-link" to="/service" onClick={toggleMenu}>Services</Link>
            <Link className="nav-link" to="/ourproject" onClick={toggleMenu}>Our Projects</Link>
            <Link className="nav-link" to="/blog" onClick={toggleMenu}>Blogs</Link>
            <Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </div>

          <a className="btn get-started-btn" href="/contact">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
