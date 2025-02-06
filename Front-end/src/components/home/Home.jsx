import React from "react";
import "./home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BarNav from "../navbar/Navbar";

function Home() {
    return (
        <div className="background">
            {/* <BarNav/> */}
            <div>
                <Navbar />
                <header style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f4' }}>
                    <h1>Welcome to the new ThreshFlow App!</h1>
                    <p>This is the home page. Here you'll find some awesome content.</p>
                </header>

                {/* Fake Company Update Section */}
                <section style={{ padding: '30px', backgroundColor: '#f8f9fa' }}>
                    <h2>Company Update</h2>
                    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3>Exciting New Features Coming Soon!</h3>
                        <p>We're thrilled to announce that the latest version of the ThreshFlow app is coming with brand new features, including:</p>
                        <ul>
                            <li>Enhanced User Interface</li>
                            
                            <li>Real-Time Notifications</li>
                            <li>New Integration with External APIs</li>
                        </ul>
                        <p>Stay tuned for more details, and make sure you're ready to explore these exciting updates in the upcoming release!</p>
                    </div>
                </section>

                <section style={{ padding: '30px', backgroundColor: '#e9ecef' }}>
                    <h2>Our Features</h2>
                    <p>Discover the amazing features of our app!</p>
                </section>

                <section style={{ padding: '30px' }}>
                    <h2>Get Started</h2>
                    <p>Learn how to get started with our app in just a few simple steps.</p>
                </section>

                <footer style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
                    <p>&copy; Powered by Pathway</p>
                </footer>
            </div>
        </div>
    );
}

export default Home;
