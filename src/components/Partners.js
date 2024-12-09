import React from "react";

const Partners = () => {
  const partners = [
    { name: "IFFCO", logo: "/images/Partners/IFFCO.png" },
    { name: "Coromandel", logo: "/images/Partners/Coromandel.png" },
    { name: "Shivalik", logo: "/images/Partners/Shivalik.png" },
    { name: "NFL", logo: "/images/Partners/NFL.png" },
    { name: "Adama", logo: "/images/Partners/Adama.png" },
    { name: "Reliance", logo: "/images/Partners/Reliance.png" },
  ];

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
      paddingTop: "15px", // Adjusted padding between the card top and image
      border: "1px solid #ddd",
      borderRadius: "8px",
      height: "180px",
      transition: "transform 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      width: "100px",
      height: "100px",
      objectFit: "contain",
      marginBottom: "2px", // Decreased margin further to reduce space between image and name
    },
    name: {
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
  };

  return (
    <div id="partners" style={styles.container}>
      <h1 style={styles.title}>Our Partners</h1>
      <div style={styles.grid}>
        {partners.map((partner, index) => (
          <div
            key={index}
            style={styles.card}
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
    </div>
  );
};

export default Partners;
