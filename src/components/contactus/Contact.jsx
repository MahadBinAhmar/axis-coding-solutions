import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/contactus/Contact.css";

import usaImg from "../../assets/contactus/location.webp";
import uaeImg from "../../assets/contactus/location.webp";
import bahrainImg from "../../assets/contactus/location.webp";
import emailImg from "../../assets/contactus/mail.webp";
import phoneImg from "../../assets/contactus/phone.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          {/* Left side */}
          <div className="col-lg-6 col-md-12">
            <div className="communication-section">
              <h6>GET IN TOUCH</h6>
              <h2>
                Seamless Communication <br /> <span>Global Impact.</span>
              </h2>
              <p className="para">
                Connect with us to drive innovation and create a lasting global
                impact. Together, we'll turn ideas into seamless solutions.
              </p>
              <hr
                style={{
                  backgroundColor: "#fab411",
                  height: "2px",
                  border: "none",
                }}
              />

              {[
                {
                  img: usaImg,
                  alt: "location",
                  heading: "USA Office",
                  para: "2000 S Eads st, Suite 312, Arlington, VA, 22202",
                },
                {
                  img: uaeImg,
                  alt: "location",
                  heading: "UAE Office",
                  para: (
                    <>
                      SRTIP (Sharjah Research Technology <br />
                      and Innovation Park) Block B, Office - B22-076 Sharjah{" "}
                      <br /> UAE
                    </>
                  ),
                },
                {
                  img: bahrainImg,
                  alt: "location",
                  heading: "Bahrain Office",
                  para: (
                    <>
                      1485, Road 2823 228 Busaiteen Muharraq <br />
                      Governorate Kingdom of Bahrain
                    </>
                  ),
                },
                {
                  img: emailImg,
                  alt: "email",
                  heading: "Email Support",
                  para: "contactus@visiocell.com",
                },
                {
                  img: phoneImg,
                  alt: "phone",
                  heading: "Let's Talk",
                  para: "Phone: +973 3942 2116",
                },
              ].map((contact, index) => (
                <div key={index} className="contact-item">
                  <div className="logo">
                    <img src={contact.img} alt={contact.alt} />
                  </div>
                  <div>
                    <strong className="heading">{contact.heading}</strong>
                    <p className="para">{contact.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <h2>Send us a message</h2>
              <p>Communication is the key to success, but first, let’s talk.</p>

              <Form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <Form.Group>
                      <Form.Label>
                        Name <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group>
                      <Form.Label>
                        Company <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your company name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        isInvalid={!!errors.company}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.company}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>

                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <Form.Group>
                      <Form.Label>
                        Phone <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group>
                      <Form.Label>
                        Email <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>

                <div className="mt-3">
                  <Form.Group>
                    <Form.Label>
                      Subject <span>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="mt-3">
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>

                <Button
                  type="submit"
                  className="mt-3 px-4 py-3 rounded-pill btn-custom"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
