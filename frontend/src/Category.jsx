// src/Category.jsx

import React from "react";

// ✅ Import images from assets/categories
import traditional from "./assets/categories/traditional.png";
import western from "./assets/categories/western.png";
import kids from "./assets/categories/kids.png";
import casual from "./assets/categories/casual.png";
import formal from "./assets/categories/formal.png";
import tshirt from "./assets/categories/tshirt.png";

// ✅ Define categories using accurate labels and image imports
const categories = [
  { name: "Traditional", image: traditional },
  { name: "Western", image: western },
  { name: "Kids Wear", image: kids },
  { name: "Casual Wear", image: casual },
  { name: "Formal Wear", image: formal },
  { name: "T-Shirts", image: tshirt },
];

const Category = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Shop by Category</h2>
      <div style={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} style={{ ...styles.card, animationDelay: `${idx * 0.1}s` }}>
            <img src={cat.image} alt={cat.name} style={styles.image} />
            <p style={styles.label}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "60px 40px",
    backgroundColor: "#f3ecc1",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#4e2600",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "50px",
  },
  card: {
    backgroundColor: "white", // remove white background
    borderRadius: "16px",
    padding: "20px",
    width: "160px",
    cursor: "pointer",
    transform: "scale(1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "fadeIn 0.6s ease forwards",
    opacity: 0,
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "contain",
    marginBottom: "12px",
  },
  label: {
    fontWeight: "500",
    fontSize: "16px",
    color: "#4e2600",
  },
};

// ✅ Global animation styles (you can move this to a CSS file if preferred)
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

div[style*="cursor: pointer"]:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(136, 82, 28, 0.96);
}
`;
document.head.appendChild(styleSheet);

export default Category;
