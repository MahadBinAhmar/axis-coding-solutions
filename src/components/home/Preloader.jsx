import React from "react";
import '../../styles/home/Preloader.css';
import logo from "../../assets/home/NavLog.webp";

function Preloader() {
  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="preloader-logo" />
    </div>
  );
}

export default Preloader;