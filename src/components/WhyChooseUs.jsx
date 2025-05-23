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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setCurrentSlide(index),
  };

  const slides = [
    {
      title: 'Digital Consultancy',
      description: 'We provide comprehensive digital marketing solutions, including SEO, PPC, social media, and content marketing. Our strategies enhance your online presence and effectively drive business growth, tailored to your specific needs.',
      buttonText: 'Let’s Strategize',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'Web Development',
      description: 'Our team builds responsive and modern websites using the latest technologies. We ensure your site is fast, secure, and optimized for all devices, helping you stand out online.',
      buttonText: 'Get Started',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings with our proven SEO strategies. We focus on keyword research, on-page optimization, and link building to drive organic traffic to your site.',
      buttonText: 'Learn More',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience with our social media marketing services. We create targeted campaigns on platforms like Instagram, Facebook, and Twitter to grow your brand’s presence.',
      buttonText: 'Contact Us',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'Content Creation',
      description: 'High-quality content is key to connecting with your audience. Our team crafts blogs, videos, and infographics that resonate with your customers and drive engagement.',
      buttonText: 'Explore Now',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
    {
      title: 'PPC Advertising',
      description: 'Maximize your ROI with our PPC advertising services. We design and manage ad campaigns on Google Ads and other platforms to deliver measurable results.',
      buttonText: 'Start Today',
      deviceImage: icon1,
      backgroundImage: bgImage,
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="slide-content">
                <div
                  key={`${index}-${currentSlide}`}
                  className="text-section animate-slide-in"
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button>{slide.buttonText}</button>
                </div>
                <div className="image-section">
                  <img src={slide.deviceImage} alt={`Slide ${index + 1} Device Mockup`} />
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