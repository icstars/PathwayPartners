// src/components/Contact/ContactPage.jsx
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import BarNav from '../navbar/Navbar';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual form submission logic (like sending to an API)
    alert(`Message sent by: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  const employees = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'johndoe@example.com',
      phone: '(555) 123-4567'
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Project Manager',
      email: 'janesmith@example.com',
      phone: '(555) 987-6543'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      title: 'HR Specialist',
      email: 'michaeljohnson@example.com',
      phone: '(555) 564-7789'
    }
  ];

  return (
    <div>
      {/* <BarNav/> */}
      <div style={{ padding: '30px', textAlign: 'center' }}>
        {/* <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '16px', height: '150px' }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Send Message
          </button>
        </form> */}

        <h2 style={{ marginTop: '50px' }}>Contact Information</h2>
        <div style={{ marginTop: '20px' }}>
          {employees.map((employee) => (
            <div key={employee.id} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#F5DB08', borderRadius: '8px' }}>
              <h3>{employee.name}</h3>
              <p><strong>Title:</strong> {employee.title}</p>
              <p><strong>Email:</strong> <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
              <p><strong>Phone:</strong> {employee.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
