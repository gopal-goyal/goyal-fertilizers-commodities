import React from 'react';
import { FaTractor, FaSeedling, FaWarehouse } from 'react-icons/fa'; 
import 'animate.css';

const Products = () => {
  return (
    <section id="products" style={sectionStyle} className="animate__animated animate__fadeInRight">
      <h2>Our Products</h2>
      <div style={productContainerStyle}>
        <div style={productStyle}>
          <FaTractor style={iconStyle} />
          <h3>Product 1</h3>
          <p>Details of Product 1...</p>
        </div>
        <div style={productStyle}>
          <FaSeedling style={iconStyle} />
          <h3>Product 2</h3>
          <p>Details of Product 2...</p>
        </div>
        <div style={productStyle}>
          <FaWarehouse style={iconStyle} />
          <h3>Product 3</h3>
          <p>Details of Product 3...</p>
        </div>
      </div>
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

const productContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const productStyle = {
  textAlign: 'center',
  margin: '20px',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '10px',
  width: '30%',
};

const iconStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
};

export default Products;
