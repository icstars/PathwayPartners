import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BarNav from './components/navbar/Navbar';
import StaffDirectory from './components/StaffDirectory/StaffDirectory';
import Policy from './components/Policy/Policy';
import Locations from './components/Locations/Locations';
import Gallery from './components/Gallery/Gallery';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Training from './components/Training/Training';
import Contacts from './components/Contacts/Contacts';
import ChatBot from './components/Chatbot/Chatbot';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/"; // Check if we're on the login page

  return (
    <div className='background'>
      {/* Only render the BarNav if not on the Login page */}
      {!isLoginPage && <BarNav />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<StaffDirectory />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;

