import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useContext } from "react";
import { CartContext } from "../Store/CartContext"; // Check the path

const ProductCard = ({id, title, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart({ id,title, price, imageUrl });
  }

  return (
    <Card className="mb-3">
     
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title className="h6">{title}</Card.Title>
        <Card.Text className="text-success">Price: Rs. {price}</Card.Text>
        <Button variant="primary" onClick={addToCartHandler}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
