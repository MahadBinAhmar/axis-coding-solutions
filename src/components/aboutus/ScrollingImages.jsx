import React from "react";
import "../../styles/aboutus/ScrollingImages.css";

import img1 from "../../assets/aboutus/1.webp";
import img2 from "../../assets/aboutus/2.webp";
import img3 from "../../assets/aboutus/3.webp";
import img4 from "../../assets/aboutus/4.webp";
import img5 from "../../assets/aboutus/5.webp";
import img6 from "../../assets/aboutus/6.webp";
import img7 from "../../assets/aboutus/7.webp";
import img8 from "../../assets/aboutus/8.webp";
import img9 from "../../assets/aboutus/9.webp";
import img10 from "../../assets/aboutus/10.webp";
import img11 from "../../assets/aboutus/11.webp";
import img12 from "../../assets/aboutus/12.webp";
import img13 from "../../assets/aboutus/13.webp";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12, img13
];

const ScrollingImages = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {/* Row 1 */}
        {images.map((src, index) => (
          <div key={index} className="scroll-item">
            <img src={src} alt={`img-${index}`} />
          </div>
        ))}
        {/* Row 2 (duplicate for infinite loop) */}
        {images.map((src, index) => (
          <div key={`dup-${index}`} className="scroll-item">
            <img src={src} alt={`dup-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
