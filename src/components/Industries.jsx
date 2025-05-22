import React from 'react';
import '../styles/Industries.css';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.jpg';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon2.jpg';
import icon5 from '../assets/icon1.jpg';
import icon6 from '../assets/icon3.jpg';


const Industries = () => {
  const features = [
    {
      icon: icon1,
      title: 'Expert Team',
      desc: 'Our team comprises seasoned professionals with extensive experience in delivering top-notch solutions.',
    },
    {
      icon: icon2,
      title: 'Innovative Solutions',
      desc: 'We use cutting-edge tech to build smart, efficient solutions tailored for your business.',
    },
    {
      icon: icon3,
      title: 'Customer Centric',
      desc: 'We understand your business goals and deliver exactly what you need — nothing less.',
    },
    {
      icon: icon4,
      title: '24/7 Support',
      desc: 'Our team is always available to support and solve your issues round the clock.',
    },
    {
        icon: icon5,
        title: '24/7 Support',
        desc: 'Our team is always available to support and solve your issues round the clock.',
    },
    {
        icon: icon6,
        title: '24/7 Support',
        desc: 'Our team is always available to support and solve your issues round the clock.',
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
