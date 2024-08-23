
import React from 'react';
import { FaLeaf } from 'react-icons/fa'; 
import 'animate.css';

const Header = () => {
  return (
    <header style={headerStyle} className="animate__animated animate__fadeInDown">
      <div style={logoContainerStyle}>
        <FaLeaf style={iconStyle} />
        <img src="Logo_GF.webp" alt="Goyal Fertilizers and Commodities" style={logoStyle} />
      </div>
      <nav>
        <button style={buttonStyle} onClick={() => scrollToSection('about-us')}>About Us</button>
        <button style={buttonStyle} onClick={() => scrollToSection('products')}>Products</button>
        <button style={buttonStyle} onClick={() => scrollToSection('contact-us')}>Contact Us</button>
      </nav>
    </header>
  );
};

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  background: '#f0f0f0',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStyle = {
  width: '150px',
  height: 'auto',
  marginLeft: '10px',
};

const iconStyle = {
  color: 'green',
  fontSize: '2rem',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

export default Header;
