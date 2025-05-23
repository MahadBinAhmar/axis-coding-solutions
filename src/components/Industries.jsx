import React from 'react';
import '../styles/Industries.css';
import icon1 from '../assets/icon1.jpg'; // Replace with a laptop icon if available
import icon2 from '../assets/icon2.jpg'; // Replace with a phone icon if available
import icon3 from '../assets/icon3.jpg'; // Replace with a gear icon if available
import icon4 from '../assets/icon2.jpg'; // Placeholder, replace if needed
import icon5 from '../assets/icon1.jpg'; // Placeholder, replace if needed
import icon6 from '../assets/icon3.jpg'; // Placeholder, replace if needed

const Industries = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      mainTitle: 'Web & Web App',
      subTitle: 'Development',
      desc: 'We offer custom web development and design, including business applications, progressive web apps, and mobile-responsive sites. Our expert team ensures optimized performance, tailored UI/UX, and seamless content management to deliver exceptional user experiences and drive business growth.',
    },
    {
      id: 2,
      icon: icon2,
      mainTitle: 'Mobile App',
      subTitle: 'Development',
      desc: 'We specialize in custom mobile app development tailored for iOS, Android, and cross-platform solutions. Our highly skilled and experienced team is dedicated to delivering innovative, user-centric designs and intuitive user experiences that captivate users and drive business growth.',
    },
    {
      id: 3,
      icon: icon3,
      mainTitle: 'Custom Software',
      subTitle: 'Development',
      desc: 'We specialize in custom software tailored for diverse industries including ERP, Sales, productivity, schools, pharmacy management, real estate, rental management, and logistics management systems, EHR for hospitals and other custom business applications and solutions to meet your specific needs.',
    },
    // Add more cards as needed, or adjust the existing ones
    { id: 4, icon: icon4, mainTitle: '24/7 Support', subTitle: '', desc: 'Our team is always available to support and solve your issues round the clock.' },
    { id: 5, icon: icon5, mainTitle: 'Fast Delivery', subTitle: '', desc: 'We ensure quick turnaround times without compromising quality.' },
    { id: 6, icon: icon6, mainTitle: 'Proven Results', subTitle: '', desc: 'Our solutions have a track record of delivering measurable success.' },
  ];

  return (
    <section className="industries">
      <div className="container">
        <h2 className="section-title">Industries</h2>
        <div className="features">
          {features.map((item, index) => (
            <div
              className="feature-card"
              key={item.id}
              style={{ '--delay': index }} // Pass delay index as a CSS variable
            >
              <div className="icon">
                <img src={item.icon} alt={`Icon for ${item.mainTitle}`} onError={(e) => (e.target.src = 'https://via.placeholder.com/50?text=Icon+Missing')} />
              </div>
              <h3 className="feature-title">{item.mainTitle}</h3>
              <h4 className="feature-subtitle">{item.subTitle}</h4>
              <p className="feature-description">{item.desc}</p>
              <button className="feature-button">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;