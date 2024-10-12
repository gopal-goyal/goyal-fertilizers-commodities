import React from 'react';
import 'animate.css';

const AboutUs = () => {
  return (
    <section id="about-us" style={sectionStyle} className="animate__animated animate__fadeInLeft">
      <h2 style={headingStyle}>About Us</h2>
      <div style={contentStyle}>
        <p style={{ ...paragraphStyle, color: '#FFFFFF' }}>
          • Founded in 1984 by Shri Mahaveer Prashad Goyal.<br />
          • Supporting agriculture in Sri Ganganagar.<br />
          • Managed by Anil, Ajay, and Vipin Goyal.
        </p>
        
        <p style={{ ...paragraphStyle, color: '#FFFFFF' }}>
          • High-quality seeds, fertilizers, and pesticides.<br />
        </p>
        
        <p style={{ ...paragraphStyle, color: '#FFD700' }}>
          • Partnerships with leading companies.<br />
          • Committed to community needs.<br />
          • Enhancing productivity and sustainability.
        </p>
        
        <p style={{ ...paragraphStyle, color: '#FFD700' }}>
          • Tradition meets innovation for a thriving future.
        </p>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '50px',
  backgroundImage: 'url("newbg.jpeg")', 
  backgroundSize: 'cover',
  color: '#fff',
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
};

const paragraphStyle = {
  fontSize: '1.5rem', // Increased font size for better visibility
  lineHeight: '1.6',
  marginBottom: '20px',
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)', // White shadow effect
};

const contentStyle = {
  margin: '20px 0', // Add some margin to separate the content
};

export default AboutUs;
