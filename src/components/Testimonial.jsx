import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.css";

const Testimonial = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Sarah Thompson",
      title: "Marketing Director at GreenLeaf",
      feedback:
        "Axis Coding Solutions delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding. We couldn’t be happier with the excellent results!",
    },
    {
      name: "Olivia Martinez",
      title: "Director of Communications",
      feedback:
        "Axis Coding Solutions transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and innovative design solutions have significantly increased our online engagement and sales. I highly recommend their services!",
    },
    {
      name: "John Down",
      title: "Manager of TechSavvy Innovations",
      feedback:
        "Axis Coding Solutions team did an incredible job redesigning our website. Their commitment to delivering a user-friendly, visually appealing site was evident throughout the project. We’ve seen a 40% increase in user engagement and donations since the launch. Highly recommended!",
    },
    {
      name: "Emily Carter",
      title: "CEO at BlueWave Tech",
      feedback:
        "Working with Axis Coding Solutions was a game-changer for us. Their team revamped our platform with cutting-edge features, making it more intuitive for our users. The results speak for themselves – our user base has grown by 35% since the relaunch!",
    },
    {
      name: "Michael Brown",
      title: "Founder of StartUp Innovate",
      feedback:
        "The team at Axis Coding Solutions exceeded our expectations. They delivered a sleek, professional website that has boosted our online presence significantly. Their support and dedication throughout the process were exceptional. Highly recommend them for any tech project!",
    },
    {
      name: "Laura Wilson",
      title: "Product Manager at NextGen Solutions",
      feedback:
        "Axis Coding Solutions brought our vision to life with a stunning website redesign. Their expertise in modern technologies and user experience design has made a huge impact on our business. We’ve seen a 50% increase in customer engagement since the launch!",
    },
  ];

  return (
    <section className="testimonial">
      <h1>
        Testimonial <span>Client Feedback & Reviews</span>
      </h1>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>{item.feedback}</p>
            <div className="author">
              <div className="author-image"></div>
              <div className="author-info">
                <h3>{item.name}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;