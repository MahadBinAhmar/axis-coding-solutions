import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/WhyChooseUs.css";
import bgImage from "../assets/WhyChooseUsbg.webp";

const slides = [
  {
    title: "Digital Consultancy",
    description:
      "We provide comprehensive digital marketing solutions, including SEO, PPC, social media, and content marketing. Our strategies enhance your online presence and effectively drive business growth.",
    buttonText: "Let’s Strategize",
    backgroundImage: bgImage,
  },
  {
    title: "Web Development",
    description:
      "Our team builds responsive and modern websites using the latest technologies. We ensure your site is fast, secure, and optimized for all devices.",
    buttonText: "Get Started",
    backgroundImage: bgImage,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings with our proven SEO strategies. We focus on keyword research, on-page optimization, and link building.",
    buttonText: "Learn More",
    backgroundImage: bgImage,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="why-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="text-section">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyChooseUs;
