// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "../../styles/contactus/ContactForm.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.company.trim()) newErrors.company = 'Company is required';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setFormData({
//         name: '',
//         company: '',
//         phone: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//       alert('Message sent successfully!');
//     }
//   };

//   return (
//     <div className="contact-form">
//       <h2>Send us a message</h2>
//       <p>Communication is the key to success, but first, let’s talk.</p>

//       <Form onSubmit={handleSubmit}>
//         <div className="row g-3">
//           <div className="col-md-6">
//             <Form.Group>
//               <Form.Label>
//                 Name <span>*</span>
//               </Form.Label>
//               <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
//               <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//             </Form.Group>
//           </div>
//           <div className="col-md-6">
//             <Form.Group>
//               <Form.Label>
//                 Company <span>*</span>
//               </Form.Label>
//               <Form.Control type="text" placeholder="Enter your company name" name="company" value={formData.company} onChange={handleChange} isInvalid={!!errors.company} />
//               <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
//             </Form.Group>
//           </div>
//         </div>

//         <div className="row g-3 mt-2">
//           <div className="col-md-6">
//             <Form.Group>
//               <Form.Label>
//                 Phone <span>*</span>
//               </Form.Label>
//               <Form.Control type="text" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
//               <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
//             </Form.Group>
//           </div>
//           <div className="col-md-6">
//             <Form.Group>
//               <Form.Label>
//                 Email <span>*</span>
//               </Form.Label>
//               <Form.Control type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
//               <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//             </Form.Group>
//           </div>
//         </div>

//         <div className="mt-3">
//           <Form.Group>
//             <Form.Label>
//               Subject <span>*</span>
//             </Form.Label>
//             <Form.Control type="text" placeholder="Enter the subject" name="subject" value={formData.subject} onChange={handleChange} isInvalid={!!errors.subject} />
//             <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
//           </Form.Group>
//         </div>

//         <div className="mt-3">
//           <Form.Group>
//             <Form.Label>Message</Form.Label>
//             <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} />
//           </Form.Group>
//         </div>

//         <Button type="submit" className="mt-3 px-4 py-3 rounded-pill btn-custom">
//           Send Message
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ContactForm;
