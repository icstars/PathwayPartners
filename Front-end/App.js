import React from 'react';

function LoginPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        height: '100vh',          // Full viewport height
        backgroundColor: '#09A3DD', // Background color
      }}
    >
      <div
        style={{
          backgroundColor: '#fff', // White login window
          padding: '40px',
          borderRadius: '10px',
          boxShadow: 'none', // Removed the box shadow
          width: '100%',
          maxWidth: '400px', // Limit the width to 400px
          textAlign: 'center', // Center the text inside the login box
        }}
      >
        <h1 style={{ marginBottom: '30px', color: '#000' }}>Thresholds</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
                color: '#000', // Black text color
              }}
            >
              Username:
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ced4da',
                borderRadius: '5px',
                backgroundColor: 'transparent', // Removed background color
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
                color: '#000', // Black text color
              }}
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ced4da',
                borderRadius: '5px',
                backgroundColor: 'transparent', // Removed background color
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff', // Blue button
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
