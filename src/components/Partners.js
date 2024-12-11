import React, { useState } from "react";

const Partners = () => {
  const partners = [
    { name: "IFFCO", logo: "/images/Partners/IFFCO.png" },
    { name: "Coromandel", logo: "/images/Partners/Coromandel.png" },
    { name: "Shivalik", logo: "/images/Partners/Shivalik.png" },
    { name: "NFL", logo: "/images/Partners/NFL.png" },
    { name: "Adama", logo: "/images/Partners/Adama.png" },
    { name: "Reliance", logo: "/images/Partners/Reliance.png" },
  ];

  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "15px",
      padding: "10px",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      paddingTop: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      height: "180px",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      outline: "none",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      width: "100px",
      height: "100px",
      objectFit: "contain",
      marginBottom: "2px",
    },
    name: {
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: isVisible ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.3s ease",
    },
    modal: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      transform: isVisible ? "scale(1)" : "scale(0.9)",
      transition: "transform 0.3s ease",
    },
    closeButton: {
      marginTop: "10px",
      padding: "8px 12px",
      border: "none",
      backgroundColor: "#007BFF",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleCardClick = (partnerName) => {
    setSelectedPartner(partnerName);
    setIsVisible(true); // Trigger the transition
  };

  const closeModal = () => {
    setIsVisible(false); // Start the transition
    setTimeout(() => setSelectedPartner(null), 300); // Wait for transition to complete before unmounting
  };

  return (
    <div id="partners" style={styles.container}>
      <h1 style={styles.title}>Our Partners</h1>
      <div style={styles.grid}>
        {partners.map((partner, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => handleCardClick(partner.name)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              style={styles.logo}
            />
            <p style={styles.name}>{partner.name}</p>
          </div>
        ))}
      </div>
      {selectedPartner && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>{selectedPartner}</h2>
            <p>
              Thank you for your interest in {selectedPartner}. More features
              are coming soon!
            </p>
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
