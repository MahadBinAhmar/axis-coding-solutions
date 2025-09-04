import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/WhyChooseUs.css';
import bgImage from '../assets/bg.jpg';
import icon1 from '../assets/icon1.jpg';

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3800,
    pauseOnHover: false,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  const slides = [
    {
      title: 'Digital Consultancy',
      description:
        'We provide comprehensive digital marketing solutions, including SEO, PPC, social media, and content marketing. Our strategies enhance your online presence and effectively drive business growth.',
      buttonText: 'Let’s Strategize',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'Web Development',
      description:
        'Our team builds responsive and modern websites using the latest technologies. We ensure your site is fast, secure, and optimized for all devices.',
      buttonText: 'Get Started',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'SEO Optimization',
      description:
        'Boost your search engine rankings with our proven SEO strategies. We focus on keyword research, on-page optimization, and link building.',
      buttonText: 'Learn More',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
  ];

  return (
    <div className="slider-container"> {/* ✅ container-fluid hata diya */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="slide-content row mx-0"> {/* ✅ gutter remove */}
                {/* Text Section */}
                <div
                  key={`${index}-${currentSlide}`}
                  className="col-lg-6 col-md-12 text-section animate-slide-in"
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button>{slide.buttonText}</button>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 col-md-12 image-section d-flex justify-content-center">
                  <img
                    src={slide.deviceImage}
                    alt={`Slide ${index + 1} Device Mockup`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhyChooseUs;
