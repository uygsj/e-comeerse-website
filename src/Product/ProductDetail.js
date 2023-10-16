import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export const ProductArr = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      ProductReview: [
  
        { name: 'Neel', review: 'I recommend this product, It is actually nice'},
  
        { name: 'Pooja', review: 'ok, product it can be better'},
  
        { name: 'Nisha' ,  review: 'good in this price'},
  
        { name: 'Ram', review: 'worth it'},
  
    ]
    },
  
    {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      ProductReview: [
  
        { name: 'Neel', review: 'I recommend this product, It is actually nice'},
  
        { name: 'Divya', review: 'ok, product it can be better'},
  
        { name: 'Ravi' ,  review: 'good in this price, want to buy more in future'},
  
        { name: 'Ram', review: 'worth it'},
  
    ]
    },
  
    {
      
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      ProductReview: [
  
        { name: 'Neel Nithin', review: 'I recommend this product, It is actually nice'},
  
        { name: 'Pratha', review: 'ok, product it can be better'},
  
        { name: 'Disha' ,  review: 'good in this price, want to buy more in future'},
  
        { name: 'Rameshwar', review: 'worth it, i will recommed this to everyone'},
  
    ]
    },
  
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      ProductReview: [
  
        { name: 'Nitin', review: 'I recommend this product, It is actually nice'},
  
        { name: 'Pratha', review: 'ok, product it can be better'},
  
        { name: 'Disha' ,  review: 'good in this price, want to buy more in future'},
  
        { name: 'Rajat', review: 'worth it, i will recommed this to everyone'},
  
    ]
    },
  
  ];
  

 
const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div className="alert alert-danger">Product not found.</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>{product.title}</h2>
          <Link to={`/product/${productId}`}> {/* Wrap the image in Link */}
            <Image src={product.imageUrl} alt={product.title} fluid />
          </Link>
          <p>Price: <strong>${product.price}</strong></p>

          <h3>Product Reviews</h3>
          <ul className="list-group">
            {product.ProductReview.map((review, id) => (
              <li key={id} className="list-group-item">
                <strong>{review.name}</strong>: {review.review}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
