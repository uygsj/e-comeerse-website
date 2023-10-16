import React from 'react';
import { Button, Image, Card } from 'react-bootstrap';

const CartItem = ({ id, title, price, imageUrl, quantity }) => {
  

  return (
    <Card>
      <Image src={imageUrl} alt="pic" fluid />
      <Card.Body>
        <Card.Title>{title.id}</Card.Title>
        <Card.Text>Price: Rs. {price}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
