import React from 'react';
import { Container, Row, Col, ListGroup, Button, Image } from 'react-bootstrap';
import { useCart } from '../Store/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    console.log("Attempting to remove item with id:", item.id);
    removeFromCart(item.id);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col xs={3}>
                    <Image src={item.imageUrl} alt={item.title} thumbnail />
                  </Col>
                  <Col xs={6}>
                    <div>{item.title}</div>
                    <div>${item.price}</div>
                    <div>Quantity: {item.quantity}</div>
                  </Col>
                  <Col xs={3}>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
