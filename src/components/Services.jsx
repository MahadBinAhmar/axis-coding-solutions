import React from 'react';
import '../styles/Services.css';
import icon1 from '../assets/nodejs.png';
import icon2 from '../assets/python.png';
import icon3 from '../assets/ruby.png';
import icon4 from '../assets/ebay.png';
import icon5 from '../assets/shopify.png';
import icon6 from '../assets/react.png';
import icon7 from '../assets/swift.png';
import icon8 from '../assets/rust.png';
import icon9 from '../assets/flutter.png';
import icon10 from '../assets/dart.png';
import icon11 from '../assets/typescript.png';
import icon12 from '../assets/angularjs.png';

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
