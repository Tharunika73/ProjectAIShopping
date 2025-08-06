import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactFooter = () => {
  const sectionStyle = {
    backgroundColor: '#f9f1c8',
    color: '#4e2600',
    padding: '48px 24px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    marginBottom: '48px',
  };

 const formAndInfoWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '400px', // increased space
  flexWrap: 'wrap', // ensures responsive layout
  marginBottom: '24px', // optional extra space below
};


  const formStyle = {
    flex: 1,
    minWidth: '280px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #a0522d',
    outline: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#3e1f00',
    color: '#fff',
    width: '30%',
    padding: '10px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  const infoStyle = {
    flex: 1,
    minWidth: '180px',
  };

  const hrStyle = {
    border: '1px solid #bfa76f',
    marginBottom: '32px',
  };

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '32px',
    fontSize: '14px',
  };

  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '12px',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '12px',
    marginTop: '32px',
    color: '#6e4e2f',
  };

  return (
    <section style={sectionStyle}>
      {/* Contact Form + Reach Us Info */}
      <div style={{ ...containerStyle }}>
        <div style={formAndInfoWrapperStyle}>
          {/* Contact Form */}
          <div style={formStyle}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Contact Us</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Your Name" style={inputStyle} required />
              <input type="email" placeholder="Your Email" style={inputStyle} required />
              <textarea placeholder="Your Message" rows="4" style={inputStyle} required></textarea>
              <button type="submit" style={buttonStyle}>Send </button>
            </form>
          </div>

          {/* Reach Us */}
          <div style={infoStyle}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Reach Us</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p><strong>Email:</strong> support@istrendy.com</p>
              <p><strong>Phone:</strong> +91-9876543210</p>
              <p><strong>Address:</strong> 123 Trendy Lane, Fashion City, India</p>
            </div>
          </div>
        </div>
      </div>

      <hr style={hrStyle} />

      {/* Footer Bottom Section */}
<div style={footerContainerStyle}>
  {/* Brand Description */}
  <div style={{ flex: 1, minWidth: '250px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>IsTrendy</h3>
    <p>Your one-stop fashion destination for trendy outfits and stylish accessories. Stay classy, stay trendy.</p>
  </div>

  {/* Sponsors Section (Same line, with spacing) */}
  <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Our Sponsors</h3>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
      <li>• FashionBuzz</li>
      <li>• StyleStar</li>
      <li>• TrendSetters</li>
      <li>• Modista Corp</li>
    </ul>
  </div>

  {/* Social Media */}
  <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Follow Us</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram style={{ ...socialIconStyle, color: '#e1306c' }} />
      </a>
      <a href="https://wa.me" target="_blank" rel="noreferrer">
        <FaWhatsapp style={{ ...socialIconStyle, color: '#25d366' }} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF style={{ ...socialIconStyle, color: '#1877f2' }} />
      </a>
    </div>
  </div>

</div>

      <p style={copyrightStyle}>
        © 2025 IsTrendy. All rights reserved.
      </p>
    </section>
  );
};

export default ContactFooter;
