import React, { useEffect, useState } from "react";
import hero from './assets/hero.png';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  const sectionStyle = {
    backgroundColor: "#f3ecc1",
    padding: "3rem 1.5rem",
    display: "flex",
    flexDirection: window.innerWidth >= 768 ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
  };

  const textStyle = {
  flex: 1,
  display: "flex",             // make it a flex container
  flexDirection: "column",     // stack heading and paragraph vertically
  justifyContent: "center",    // center vertically
  alignItems: "center",        // center horizontally
  textAlign: "center",         // center text
  opacity: animate ? 1 : 0,
  transform: animate ? "translateX(0)" : "translateX(-30px)",
  transition: "all 0.8s ease-in-out",
};


  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4B2E2B",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#4A4A4A",
  };

  const imageStyle = {
    flex: 1,
    maxWidth: "700px",
    width: "200%",
    borderRadius: "1rem",
   
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>Be Bold. Be Trendy. Be You.</h2>
        <p style={paragraphStyle}>
         At IsTrendy, we bring the latest fashion straight to your wardrobe. Explore unique styles that reflect your vibe. Express yourself in bold and modern fashion with confidence.
      </p>
      </div>

      <img
        src={hero}
        alt="Fashion"
        style={imageStyle}
      />
    </section>
  );
};

export default Hero;
