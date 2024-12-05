import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import "animate.css";
import "./ContactUs.css";

const ContactUs = () => {
  const handleQueryClick = () => {
    window.location.href = "/query.html";
  };

  return (
    <section
      id="contact-us"
      style={contactDetailsStyle}
      className="animate__animated animate__fadeInUp"
    >
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        We would love to hear from you! Whether you have questions about our
        products, need assistance with your order, or just want to learn more
        about Goyal Fertilizers and Commodities, feel free to reach out to us
        through any of the following methods:
      </p>

      <div style={sectionStyle}>
        <div className="contact-item" style={contactItemStyle}>
          <FaMapMarkerAlt
            className="animate__animated animate__fadeInLeft"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Address:</strong> G 29, Udhyog market, Sri Ganganagar,
            Rajasthan (335001)
          </p>
        </div>

        <div className="contact-item" style={contactItemStyle}>
          <FaPhone
            className="animate__animated animate__bounceIn"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Phone:</strong> 7597459595, 9413377087
          </p>
        </div>

        <div className="contact-item" style={contactItemStyle}>
          <FaEnvelope
            className="animate__animated animate__fadeInUp"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Email:</strong> greatgoyal.gfc@gmail.com
          </p>
        </div>

        <div className="contact-item" style={contactItemStyle}>
          <FaInstagram
            className="animate__animated animate__zoomIn"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Instagram:</strong> gfc_goyal
          </p>
        </div>

        {/* Add link wrapping QR code */}
        <div className="qr-code">
          <a
            href="https://www.instagram.com/gfc_goyal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/gfc_goyal_qr.png"
              alt="Instagram QR"
              style={{ width: "10rem", cursor: "pointer" }}
            />
          </a>
        </div>

        {/* Add "Send a Query" Button */}
        <div style={queryButtonContainerStyle}>
          <button onClick={handleQueryClick} style={queryButtonStyle}>
            Send a Query
          </button>
        </div>
      </div>
    </section>
  );
};

const contactDetailsStyle = {
  padding: "1em",
  color: "white",
  lineHeight: "1.8",
  // marginTop: "20px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  // border: "2px solid #fff",
  backgroundColor: "#1f1f1f",
  overflow: "auto",
};

const sectionStyle = {
  backgroundSize: "cover",
  backgroundColor: "#1f1f1f",
  color: "#fff",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const contactItemStyle = {
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  color: "#f0f0f0",
  marginRight: "10px",
  fontSize: "1.5rem",
};

const textStyle = {
  color: "#ffffff",
  margin: 0,
  textAlign: "left",
};

const headingStyle = {
  fontFamily: `'Top Secret', serif`,
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "1rem",
  color: "#fff",
  lineHeight: "1.6",
};

const queryButtonContainerStyle = {
  marginTop: "20px",
  textAlign: "center",
};

const queryButtonStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
  cursor: "pointer",
};

export default ContactUs;
