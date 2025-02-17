import React from "react";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header =()=>{
    return(
<div>

    <Navbar bg= "light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Thresholds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#link">Directory</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Resources</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Locations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contacts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    )
}

export default Header