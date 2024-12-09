import React from "react";
import "animate.css";

const Header = () => {
  return (
    <header
      style={headerStyle}
      className="animate__animated animate__fadeInDown"
    >
      <div style={logoContainer}>
        <img
          src="images/gfc_logo.png"
          alt="Goyal Fertilizers and Commodities"
          style={logoStyle}
        />
        <h1 style={brandTextStyle}>GOYAL FERTILIZER & COMMODITIES</h1>
      </div>
      <div style={navbar}>
        <nav style={navStyle}>
          <button
            style={buttonStyle}
            onClick={() => scrollToSection("about-us")}
          >
            About Us
          </button>
          {/* <button
            style={buttonStyle}
            onClick={() => scrollToSection("products")}
          >
            Products
          </button> */}
          <button
            style={buttonStyle}
            onClick={() => scrollToSection("partners")}
          >
            Partners
          </button>
          <button
            style={buttonStyle}
            onClick={() => scrollToSection("contact-us")}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 20px",
  background: "#f0f0f0",
  position: "relative",
};

const logoContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
};

const logoStyle = {
  width: "120px",
  height: "auto",
  marginLeft: "10px",
};

const brandTextStyle = {
  fontFamily: "Helvetica, sans-serif",
  fontSize: "2.0rem",
  lineHeight: "1.6",
  fontWeight: "1200",
  color: "#4CAF50",
  marginTop: "10px",
  marginBottom: "5px",
  textAlign: "center",
};

const navbar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "10px 0",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease",
};

export default Header;
