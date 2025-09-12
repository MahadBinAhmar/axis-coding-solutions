import React from "react";
import "../../styles/aboutus/IndustriesUs.css";
import icon1 from "../../assets/aboutus/Strategic .webp";
import icon2 from "../../assets/aboutus/Technology .webp";
import icon3 from "../../assets/aboutus/AI.webp";
import icon4 from "../../assets/aboutus/On.webp";
import icon5 from "../../assets/aboutus/Cybersecurity.webp";
import icon6 from "../../assets/aboutus/UX .webp";

const IndustriesUs = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      mainTitle: "Strategic Enterprise Process Design",
      desc: "We work closely with our clients as partners to develop tailored digital enterprise process workflows that are embedded in the solutions we build.",
    },
    {
      id: 2,
      icon: icon2,
      mainTitle: "Technology Design and Implementation",
      desc: "Our team of software engineers design, implement, and optimizing the right technologies to support your digital transformation journey.",
    },
    {
      id: 3,
      icon: icon3,
      mainTitle: "AI-driven Data Analytics",
      desc: "We leverage data-driven insights to uncover valuable trends and opportunities, enabling informed decision-making.",
    },
    {
      id: 4,
      icon: icon4,
      mainTitle: "On-Premises and Cloud Solutions",
      desc: "Our experts build systems to optimize their infrastructure for scalability and cost-effectiveness.",
    },
    {
      id: 5,
      icon: icon5,
      mainTitle: "Cybersecurity",
      desc: "We prioritize data security and protect your organization from cyber threats.",
    },
    {
      id: 6,
      icon: icon6,
      mainTitle: "UX Design",
      desc: "Our UX team focus on building human-centered systems that focus on low-code and no code approach to operating and customizing solutions.",
    },
  ];

  return (
    <section className="industries">
      <div className="container">
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <div className="industry-card" style={{ "--delay": index }}>
                <div className="industry-header">
                  <div className="industry-icon">
                    <img
                      src={item.icon}
                      alt={`Icon for ${item.mainTitle}`}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/40?text=Icon")
                      }
                    />
                  </div>
                  <div className="industry-titles">
                    <h3 className="industry-title">{item.mainTitle}</h3>
                    <h4 className="industry-subtitle">{item.subTitle}</h4>
                  </div>
                </div>

                <div className="industry-divider"></div>
                <p className="industry-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesUs;
