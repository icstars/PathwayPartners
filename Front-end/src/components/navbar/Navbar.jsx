import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './navbar.css'

function BarNav() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session (if using authentication)
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");

    // Redirect to Login page
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">Thresholds</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/staff">Staff Directory</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/chatbot">Chatbot</Nav.Link>
              <Nav.Link href="/locations">Locations</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="/contacts">Contacts</NavDropdown.Item>
                <NavDropdown.Item href="/training">Training Resources</NavDropdown.Item>
                <NavDropdown.Item href="/policy">Policy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleSignOut} style={{ color: "red" }}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BarNav;
