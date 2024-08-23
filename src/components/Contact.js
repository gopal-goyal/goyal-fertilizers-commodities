// src/components/ContactUs.js

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; 
import 'animate.css';

const ContactUs = () => {
  return (
    <section id="contact-us" style={sectionStyle} className="animate__animated animate__fadeInUp">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Whether you have questions about our products, need assistance with your order, 
        or just want to learn more about Goyal Fertilizers and Commodities, feel free to reach out to us through any of the following methods:
      </p>

      <div style={contactDetailsStyle}>
        <p><FaMapMarkerAlt style={iconStyle} /> <strong>Address:</strong> [Your Address Here]</p>
        <p><FaPhone style={iconStyle} /> <strong>Phone:</strong> [Your Phone Number Here]</p>
        <p><FaEnvelope style={iconStyle} /> <strong>Email:</strong> [Your Email Address Here]</p>
        <p><FaClock style={iconStyle} /> <strong>Working Hours:</strong> [Your Working Hours Here]</p>
      </div>

      <p>
        Alternatively, you can fill out our contact form, and we will get back to you as soon as possible.
      </p>
    </section>
  );
};

const sectionStyle = {
  padding: '50px',
  backgroundImage: 'url("bg2.jpg")', 
  backgroundSize: 'cover',
  color: '#fff',
  minHeight: '100vh',
};

const contactDetailsStyle = {
  marginTop: '20px',
  lineHeight: '1.8',
};

const iconStyle = {
  color: '#4CAF50',
  marginRight: '10px',
};

export default ContactUs;
