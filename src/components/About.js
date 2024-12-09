import React, { useEffect, useRef } from "react";
import "animate.css";

const AboutUs = () => {
  const wordsRef = useRef([]); // References to all individual words

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      wordsRef.current.forEach((word) => {
        if (word) {
          const rect = word.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = Math.min(
              Math.max(rect.top / window.innerHeight, 0),
              1
            );
            const color = progress > 0.55 ? "#ffffff" : "#000000";
            word.style.color = color;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paragraphs = [
    "Established in 1984 by Shri Mahaveer Prashad Goyal, our company has been a vital part of Sri Ganganagar's agricultural community.",
    "Now managed by Anil, Ajay, and Vipin Goyal, we provide high-quality seeds, fertilizers, and pesticides to boost productivity.",
  ];

  const renderParagraphs = () =>
    paragraphs.map((text, paraIndex) => (
      <p key={paraIndex} style={paragraphStyle}>
        {text.split(" ").map((word, wordIndex) => (
          <span
            key={`${paraIndex}-${wordIndex}`}
            ref={(el) => (wordsRef.current[paraIndex * 100 + wordIndex] = el)}
            style={wordStyle}
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    ));

  return (
    <section
      id="about-us"
      style={sectionStyle}
      className="animate__animated animate__fadeInLeft"
    >
      <h2
        style={{
          ...headingStyle,
        }}
        className="animate__animated animate__fadeInLeft"
      >
        About Us
      </h2>
      <div style={contentStyle}>{renderParagraphs()}</div>
    </section>
  );
};

const sectionStyle = {
  padding: "40px",
  backgroundColor: "#FBAB7E",
  backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  color: "#fff",
  // minHeight: "100vh",
};

const headingStyle = {
  color: "#ffffff",
  fontSize: "3rem",
  fontWeight: "900", // More prominent weight
  fontFamily: "'Playfair Display', serif", // Stylish font
  marginBottom: "60px",
  textShadow: "4px 4px 8px rgba(0,0,0,0.7)",
  textAlign: "center", // Centering the header text
};

const paragraphStyle = {
  fontSize: "1.4rem", // Increased font size for more bold text
  lineHeight: "1.5", // Adjust line height for readability
  marginBottom: "10px",
  textAlign: "center", // Center-aligned text
  fontFamily: "'Roboto', sans-serif", // Stylish modern font
  fontWeight: "700", // Bolder text weight
  color: "#0f0f0f", // Slightly lighter color for better contrast
};

const wordStyle = {
  display: "inline-block", // Treat each word as a block for independent styling
  transition: "color 0.3s ease", // Smooth transition for color change
  fontWeight: "700", // Make individual words bold
};

const contentStyle = {
  margin: "20px 0",
};

export default AboutUs;
