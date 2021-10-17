import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbar-warper">
      <Container>
        <Navbar.Brand href="#home">MEDI HEALTH CARE</Navbar.Brand>
        <Nav className="ml-auto m-navbar">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">pages</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
