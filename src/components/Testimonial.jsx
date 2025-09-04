import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.css";

// 👇 Apni images import karo
import user1 from "../assets/st.webp";
import user2 from "../assets/om.webp";
import user3 from "../assets/jd.webp";
import user4 from "../assets/ec.webp";
import user5 from "../assets/mc.webp";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Sarah Thompson",
      title: "Marketing Director at GreenLeaf",
      feedback:
        "Axis Coding Solutions delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store.",
      image: user1,
    },
    {
      name: "Olivia Martinez",
      title: "Director of Communications",
      feedback:
        "Axis Coding Solutions transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand.",
      image: user2,
    },
    {
      name: "John Down",
      title: "Manager of TechSavvy Innovations",
      feedback:
        "Axis Coding Solutions team did an incredible job redesigning our website. We’ve seen a 40% increase in user engagement since the launch.",
      image: user3,
    },
    {
      name: "Emily Carter",
      title: "CEO at BlueWave Tech",
      feedback:
        "Working with Axis Coding Solutions was a game-changer for us. The results speak for themselves – our user base has grown by 35%.",
      image: user4,
    },
    {
      name: "Michael Brown",
      title: "Founder of StartUp Innovate",
      feedback:
        "They delivered a sleek, professional website that has boosted our online presence significantly. Exceptional support throughout!",
      image: user5,
    },
  ];

  return (
    <section className="testimonial container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1>
            Client Feedback<span> & </span>Reviews
          </h1>
        </div>
      </div>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card-wrapper" key={index}>
            <div className="testimonial-card">
              <p>{item.feedback}</p>
              <div className="author">
                <div className="author-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="author-info">
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
