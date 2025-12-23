import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={brandStyle}>GAME<span style={{ color: '#cc0000' }}>STOP</span> CLONE</p>
        <p style={namesStyle}>
          Made by <strong>Muhammad Meeran Baig (271058382)</strong> and <strong>Sarmad Ahmad Maqsood (271047651)</strong>
        </p>
        <p style={copyrightStyle}>© 2024 Project Assignment. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: '30px 20px',
  textAlign: 'center',
  borderTop: '3px solid #cc0000',
};

const containerStyle = { maxWidth: '1200px', margin: '0 auto' };
const brandStyle = { fontSize: '20px', fontWeight: '900', marginBottom: '10px', letterSpacing: '1px' };
const namesStyle = { fontSize: '14px', color: '#ccc', marginBottom: '10px' };
const copyrightStyle = { fontSize: '12px', color: '#777' };

export default Footer;