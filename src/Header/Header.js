import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from '../Store/CartContext'; // Import CartContext, not Cart

const Header = (props) => {
  const cart = useContext(CartContext); // Use CartContext

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/store">STORE</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
            
            <Nav.Link href="/movies">MOVIES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-slate-500 text-center p-4 shadow-gray-900 shadow-lg">
        <div>
          <Link to="/cart">
            <Button>
              Cart - {cart.cart.length} - items {/* Access the cart array from CartContext */}
               
            </Button>
          </Link>
        </div>
        <h1 className="bg-secondary text-center py-4 shadow-lg display-1 text-light">The Generics</h1>
      </div>
    </>
  );
};

export default Header;
