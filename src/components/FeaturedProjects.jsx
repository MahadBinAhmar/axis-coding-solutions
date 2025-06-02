import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/FeaturedProjects.css";
import icon1 from "../assets/icon1.jpg"; // Replace with a laptop icon if available
import icon2 from "../assets/icon2.jpg"; // Replace with a phone icon if available
import icon3 from "../assets/icon3.jpg"; // Replace with a gear icon if available

const FeaturedProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slides = entry.target.querySelectorAll(".slide");
            slides.forEach((slide) => {
              slide.classList.add("animate-on-scroll");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Simvictus",
      subtitle: "Gaming Ecommerce Platform for Enthusiasts and Collectors",
      images: [icon1, icon2, icon3],
    },
    {
      id: 2,
      title: "Be National",
      subtitle: "Empowering Communities with Public",
      images: [icon1, icon2, icon3],
    },
    {
      id: 3,
      title: "Dubai Wheels",
      subtitle:
        "Premier Platform for High Quality Wheels and Automotive Solutions",
      images: [icon1, icon2, icon3],
    },
    {
      id: 4,
      title: "Tech Innovate",
      subtitle: "Cutting-Edge Tech Solutions",
      images: [icon1, icon2, icon3],
    },
    {
      id: 5,
      title: "EduConnect",
      subtitle: "Online Learning Platform",
      images: [icon1, icon2, icon3],
    },
    {
      id: 6,
      title: "HealthSync",
      subtitle: "Healthcare Management System",
      images: [icon1, icon2, icon3],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="featured-projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Inspired By Our Projects? Let's Create Yours!
        </p>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="slide">
              <div className="project-card">
                <div className="project-images">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} Mockup ${idx + 1}`}
                      className="project-image"
                    />
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProjects;