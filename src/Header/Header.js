import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from '../Store/CartContext';

const Header = (props) => {
  const cart = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" activeClassName="active" end>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store" activeClassName="active">
              STORE
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              ABOUT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              CONTACT US
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies" activeClassName="active">
              MOVIES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" activeClassName="active">
              LOGIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-slate-500 text-center p-4 shadow-gray-900 shadow-lg">
        <div>
          <Link to="/cart">
            <Button>
              Cart - {cart.cart.length} - items
            </Button>
          </Link>
        </div>
        <h1 className="bg-secondary text-center py-4 shadow-lg display-1 text-light">The Generics</h1>
      </div>
    </>
  );
};

export default Header;
