import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const formContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3ecc1",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(205, 102, 47, 0.92)",
    width: "400px",
    textAlign: "center",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const buttonStyle = {
    backgroundColor: "#3b1f0d", // Dark brown
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  };

  const toggleTextStyle = {
    marginTop: "15px",
    color: "#333",
    fontSize: "14px",
    cursor: "pointer",
  };

  const homeLinkStyle = {
    marginTop: "10px",
    display: "inline-block",
    color: "#3b1f0d",
    fontWeight: "bold",
    fontSize: "14px",
    textDecoration: "none", // No underline
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle}>
        <h2 style={{ color: "#3b1f0d", marginBottom: "20px" }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            style={inputStyle}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={toggleForm} style={{ cursor: "pointer", color: "#555", textAlign: "center", marginTop: "1rem" }}>
  {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
</p>


        <Link to="/" style={homeLinkStyle}>
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;
