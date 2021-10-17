import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, handleLogout } = useAuth();
  return (
    <Navbar className="navbar-warper">
      <Container>
        <Navbar.Brand href="#home">MEDI HEALTH CARE</Navbar.Brand>
        <Nav className="ml-auto m-navbar">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link href="#features">pages</Nav.Link>
          {user.email ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}
          <Nav.Link>{user.displayName}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
