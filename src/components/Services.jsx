import React from 'react';
import '../styles/Services.css';
import icon1 from '../assets/nodejs.webp';
import icon2 from '../assets/python.webp';
import icon3 from '../assets/ruby.webp';
import icon4 from '../assets/ebay.webp';
import icon5 from '../assets/shopify.webp';
import icon6 from '../assets/react.webp';
import icon7 from '../assets/swift.webp';
import icon8 from '../assets/rust.webp';
import icon9 from '../assets/flutter.webp';
import icon10 from '../assets/dart.webp';
import icon11 from '../assets/typescript.webp';
import icon12 from '../assets/angularjs.webp';

const techStackRow1 = [
  { name: 'Node.js', icon: icon1 },
  { name: 'Python', icon: icon2 },
  { name: 'Ruby on Rails', icon: icon3 },
  { name: 'Ebay', icon: icon4 },
  { name: 'Shopify', icon: icon5 },
  { name: 'React', icon: icon6 },
];

const techStackRow2 = [
  { name: 'Swift', icon: icon7 },
  { name: 'Rust', icon: icon8 },
  { name: 'Flutter', icon: icon9 },
  { name: 'Dart', icon: icon10 },
  { name: 'TypeScript', icon: icon11 },
  { name: 'Angular', icon: icon12 },
];

const Services = () => {
  return (
    <div className="tech-slider-section container-fluid">
      <div className="slider-row row-1">
        <div className="slider-track">
          {[...techStackRow1, ...techStackRow1].map((tech, i) => (
            <div className="tech-card d-flex align-items-center" key={i}>
              <img src={tech.icon} alt={tech.name} className="img-fluid" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-row row-2">
        <div className="slider-track reverse">
          {[...techStackRow2, ...techStackRow2].map((tech, i) => (
            <div className="tech-card d-flex align-items-center" key={i}>
              <img src={tech.icon} alt={tech.name} className="img-fluid" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
