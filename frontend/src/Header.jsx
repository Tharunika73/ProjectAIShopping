import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "./assets/logo3.png"; // Adjust path if needed
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#f7e9d6",
    borderBottom: "2px solid #d4b089",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const logoStyle = {
    width: "32px",
    height: "32px",
  };

  const brandNameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#5a3c1a",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    color: "#4e2600",
    cursor: "pointer",
  };

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#4e2600",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      {/* Logo + Brand Name */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={brandNameStyle}>IsTrendy</span>
      </div>

      {/* Nav Links */}
      <nav style={navStyle}>
        <a href="#home" style={linkStyle}>Home</a>

        {/* Scroll to contact in Footer */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          style={linkStyle}
        >
          Contact
        </ScrollLink>

         <Link to="/login" style={linkStyle}>Login</Link> 
      

      {/* Icons */}
      <div style={iconContainerStyle}>
        <a href="#cart" title="Cart">
          <FaShoppingCart style={iconStyle} />
        </a>
        <a href="#profile" title="Profile">
          <FaUserCircle style={iconStyle} />
        </a>
      </div>
      </nav>
    </header>
  );
};

export default Header;
