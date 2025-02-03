import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Locations from "./components/locations/Locations";
import Profile from "./components/profile/Profile";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/locations" element={<Locations />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
