import React from 'react';
import '../../styles/home/Industries.css';
import icon1 from '../../assets/home/webdev.webp';
import icon2 from '../../assets/home/flutter.webp';
import icon3 from '../../assets/home/dart.webp';
import icon4 from '../../assets/home/support.webp';
import icon5 from '../../assets/home/fastd.webp';
import icon6 from '../../assets/home/proven.webp';

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
    {
      id: 4,
      icon: icon4,
      mainTitle: '24/7 Support',
      subTitle: '',
      desc: 'Our dedicated support team is available 24/7 to assist you with any challenges or concerns. We prioritize fast response times, effective solutions, and consistent communication to ensure your operations run smoothly and your questions are answered without delay, anytime.',
    },
    {
      id: 5,
      icon: icon5,
      mainTitle: 'Fast Delivery',
      subTitle: '',
      desc: 'We are committed to delivering projects within short turnaround times while maintaining the highest standards of quality. Our efficient development process, attention to detail, and experienced team ensure that speed never comes at the expense of performance or reliability.',
    },
    {
      id: 6,
      icon: icon6,
      mainTitle: 'Proven Results',
      subTitle: '',
      desc: 'Our solutions consistently deliver measurable results, helping clients achieve tangible business growth and operational efficiency. With a proven track record of success across diverse industries, we focus on performance-driven outcomes that reflect real value, innovation, and long-term impact for our clients.',
    },
  ];

  return (
    <section className="services-section">
      <div className="custom-container">
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <div className="service-card" style={{ "--delay": index }}>
                <div className="service-header">
                  <div className="service-icon">
                    <img
                      src={item.icon}
                      alt={`Icon for ${item.mainTitle}`}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/40?text=Icon")
                      }
                    />
                  </div>
                  <div className="service-titles">
                    <h3 className="service-title">{item.mainTitle}</h3>
                    <h4 className="service-subtitle">{item.subTitle}</h4>
                  </div>
                </div>

                <div className="service-divider"></div>
                <p className="service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
