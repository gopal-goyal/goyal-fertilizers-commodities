import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
// import "animate.css";

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
        We would love to hear from you! Whether you have questions, need
        assistance, or want to learn more about Goyal Fertilizers, feel free to
        contact us using the methods below:
      </p>

      <div style={sectionStyle}>
        <div style={styles.contactItem}>
          <FaMapMarkerAlt
            className="animate__animated animate__fadeInLeft"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Address:</strong> G 29, Udhyog market, Sri Ganganagar,
            Rajasthan (335001)
          </p>
        </div>

        <div style={styles.contactItem}>
          <FaPhone
            className="animate__animated animate__bounceIn"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Phone:</strong> 7597459595, 9413377087
          </p>
        </div>

        <div style={styles.contactItem}>
          <FaEnvelope
            className="animate__animated animate__fadeInUp"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Email:</strong> greatgoyal.gfc@gmail.com
          </p>
        </div>

        <div style={styles.contactItem}>
          <FaInstagram
            className="animate__animated animate__zoomIn"
            style={iconStyle}
          />
          <p style={textStyle}>
            <strong>Instagram:</strong> gfc_goyal
          </p>
        </div>

        {/* Add link wrapping QR code */}
        <div style={styles.qrCode}>
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
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
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

const styles = {
  contactItem: {
    display: "flex",
    marginBottom: "1em",
  },
  qrCode: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1em",
  },
};

export default ContactUs;
