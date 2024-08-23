import React from 'react';
import 'animate.css';

const AboutUs = () => {
  return (
    <section id="about-us" style={sectionStyle} className="animate__animated animate__fadeInLeft">
      <h2>About Us</h2>
      <p>
        Welcome to Goyal Fertilizers and Commodities, your trusted partner in agricultural growth and development. 
        Established in [Year], we have been committed to providing high-quality fertilizers and commodities to farmers and agricultural businesses across the region.
      </p>
      <p>
        Our mission is to support sustainable farming practices by offering products that enhance soil fertility and increase crop yields. 
        With a wide range of fertilizers and agricultural commodities, we aim to meet the diverse needs of our customers, ensuring the best outcomes for their farming operations.
      </p>
      <p>
        At Goyal Fertilizers and Commodities, we believe in the power of nature and the importance of nurturing it. 
        Our products are designed to work in harmony with the environment, promoting healthy plant growth and long-term soil health.
      </p>
      <p>
        Join us in our journey towards a greener, more sustainable future. Together, we can cultivate success, one crop at a time.
      </p>
    </section>
  );
};

const sectionStyle = {
  padding: '50px',
  backgroundImage: 'url("bg1.jpg")', 
  backgroundSize: 'cover',
  color: '#fff',
  minHeight: '100vh',
};

export default AboutUs;
