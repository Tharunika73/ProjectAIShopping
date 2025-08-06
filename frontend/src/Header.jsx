import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "./assets/logo3.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        backgroundColor: "#f7e2ba",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      {/* Left: Logo + Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "32px",
            height: "32px",
            objectFit: "contain",
          }}
        />
        <span style={{ fontSize: "20px", fontWeight: "600", color: "#5C4033" }}>
          IsTrendy
        </span>
      </div>

      {/* Center: Navigation Links */}
      <nav style={{ display: "flex", gap: "24px" }}>
        <a href="#home" style={navStyle}>Home</a>
        <a href="#about" style={navStyle}>Contact</a>
        <Link to="/login" style={navStyle}>Login</Link>
      

      {/* Right: Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "20px", color: "#5C4033" }}>
        <a href="#cart" style={{ opacity: 1, transition: "opacity 0.2s" }}>
          <FaShoppingCart />
        </a>
        <Link to="/login" style={{ opacity: 1, transition: 'opacity 0.2s' }}>
          <FaUserCircle />
        </Link>
      </div>
      </nav>
    </header>
  );
};

const navStyle = {
  color: "#5C4033",
  textDecoration: "none",
  fontWeight: "500",
};

export default Header;
