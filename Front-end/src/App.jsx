import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';  // ProfilePage component
import GalleryPage from './GalleryPage';  // GalleryPage component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
