import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

const Header = () => {



  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/order">Order Tracking</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

