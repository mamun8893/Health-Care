import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, handleLogout } = useAuth();
  return (
    <Navbar className="navbar-warper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">MEDI HEALTH CARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto m-navbar">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Conatct
            </Nav.Link>
            <Nav.Link as={NavLink} to="/appointment">
              Appointment
            </Nav.Link>
            {user.email ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link>
              {user?.displayName && `Signed in as: ${user?.displayName}`}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
