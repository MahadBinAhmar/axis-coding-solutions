import React from 'react';
import '../../styles/home/Services.css';
import icon1 from '../../assets/home/nodejs.webp';
import icon2 from '../../assets/home/python.webp';
import icon3 from '../../assets/home/ruby.webp';
import icon4 from '../../assets/home/ebay.webp';
import icon5 from '../../assets/home/shopify.webp';
import icon6 from '../../assets/home/react.webp';
import icon7 from '../../assets/home/swift.webp';
import icon8 from '../../assets/home/rust.webp';
import icon9 from '../../assets/home/flutter.webp';
import icon10 from '../../assets/home/dart.webp';
import icon11 from '../../assets/home/typescript.webp';
import icon12 from '../../assets/home/angularjs.webp';

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
