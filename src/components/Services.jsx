import React from 'react';
import '../styles/Services.css';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.jpg';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon2.jpg';
import icon5 from '../assets/icon1.jpg';
import icon6 from '../assets/icon3.jpg';

const techStackRow1 = [
  { name: 'Node.js', icon: icon1 },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'Ruby on Rails', icon: '/icons/rails.png' },
  { name: 'Express', icon: '/icons/express.png' },
  { name: 'Shopify', icon: '/icons/shopify.png' },
  { name: 'React', icon: '/icons/react.png' },
];

const techStackRow2 = [
  { name: 'Swift', icon: '/icons/swift.png' },
  { name: 'Electron Js', icon: '/icons/electron.png' },
  { name: 'Assembly', icon: '/icons/assembly.png' },
  { name: 'Rust', icon: '/icons/rust.png' },
  { name: 'TypeScript', icon: '/icons/typescript.png' },
  { name: 'PHP', icon: '/icons/php.png' },
];

const Services = () => {
  return (
    <div className="tech-slider-section">
      <div className="slider-row row-1">
        <div className="slider-track">
          {[...techStackRow1, ...techStackRow1].map((tech, i) => (
            <div className="tech-card" key={i}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-row row-2">
        <div className="slider-track reverse">
          {[...techStackRow2, ...techStackRow2].map((tech, i) => (
            <div className="tech-card" key={i}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
