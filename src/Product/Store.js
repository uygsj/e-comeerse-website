import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const productsList = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Store = (props) => {
  return (
    <Container>
      <Row>
        {productsList.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Link to={`/product/ImageUrl/${product.id}`}> 
  <ProductCard id={product.id} title={product.title} price={product.price} imageUrl={product.imageUrl} />
</Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
