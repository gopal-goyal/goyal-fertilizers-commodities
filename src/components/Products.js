import React, { useState } from 'react';
import 'animate.css';

const Products = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleCardFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <section id="products" style={sectionStyle} className="animate__animated animate__fadeInRight">
      <h2 style={headingStyle}>Our Products</h2>
      <div style={productContainerStyle}>
        {productsData.map((product, index) => (
          <div
            key={index}
            style={cardContainerStyle}
            onClick={() => handleCardFlip(index)}
          >
            <div style={{ ...cardStyle, ...(flippedCards[index] ? flippedCardStyle : {}) }}>
              <div style={frontStyle}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={product.name === 'Kisan Urea' ? smallImageStyle : imageStyle}
                />
                <h3>{product.name}</h3>
              </div>
              <div style={backStyle}>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Product Data Array
const productsData = [
  {
    name: 'Kisan Urea',
    image: 'KUreaBg.png',
    description: 'This is a detailed description of Product 1...',
  },
  {
    name: 'Iffco DAP',
    image: 'dapTempBg.png',
    description: 'This is a detailed description of Product 2...',
  },
  {
    name: 'Gromor Super',
    image: 'super.png',
    description: 'This is a detailed description of Product 3...',
  },
];

const sectionStyle = {
  padding: '50px',
  backgroundImage: 'url("ProBg.jpg")',
  backgroundSize: 'cover',
  color: '#fff',
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#FFFFFF',
  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
};

const productContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const cardContainerStyle = {
  perspective: '1000px',
  margin: '20px',
  width: '45%',
};

const cardStyle = {
  width: '100%',
  height: '320px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s ease',
  borderRadius: '10px',
};

const frontStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '10px',
};

const backStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#000',
  borderRadius: '10px',
  padding: '20px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
  marginBottom: '10px',
  height: '240px',
  objectFit: 'cover',
};

const smallImageStyle = {
  width: '670',
  borderRadius: '10px',
  marginBottom: '10px',
  height: '180px',
  objectFit: 'cover',
};

const flippedCardStyle = {
  transform: 'rotateY(180deg)',
};

export default Products;
