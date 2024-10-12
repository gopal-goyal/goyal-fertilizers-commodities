import React, { useState } from 'react';
import { FaLeaf, FaBars } from 'react-icons/fa';
import 'animate.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyle} className="animate__animated animate__fadeInDown">

      <div>
        <img src="gfc_logo.png" alt="Goyal Fertilizers and Commodities" style={logoStyle} />
      </div>
        <div style={navbar}>
          <nav style={navStyle}>
            <button style={buttonStyle} onClick={() => scrollToSection('about-us')}>About Us</button>
            <button style={buttonStyle} onClick={() => scrollToSection('products')}>Products</button>
            <button style={buttonStyle} onClick={() => scrollToSection('contact-us')}>Contact Us</button>
          </nav>

          </div>
    </header>
  );
};

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 20px',
  background: '#f0f0f0',
  position: 'relative',
};

const navbar = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '10px 0',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
};

const logoStyle = {
  width: '120px',
  height: 'auto',
  marginLeft: '10px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

export default Header;
