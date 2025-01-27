import React from 'react';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: 'rgb(100, 210, 244)', // Background color should match the page
        padding: '10px 0',
        textAlign: 'center',
        margin: '0', // Remove margin to ensure no space around navbar
        width: '100%', // Make sure the navbar spans the full width
      }}
    >
      <a
        href="/"
        style={{
          margin: '0 20px',
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
        }}
      >
        Login
      </a>
      <a
        href="/profile"
        style={{
          margin: '0 20px',
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
        }}
      >
        Profile
      </a>
      <a
        href="/gallery"
        style={{
          margin: '0 20px',
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
        }}
      >
        Gallery
      </a>
    </nav>
  );
}

export default Navbar;
