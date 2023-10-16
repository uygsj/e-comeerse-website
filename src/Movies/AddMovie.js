import React, { useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddMovie = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" ref={titleRef} />
            </Form.Group>
            <Form.Group controlId="openingText">
              <Form.Label>Opening Text</Form.Label>
              <Form.Control type="text" ref={openingTextRef} />
            </Form.Group>
            <Form.Group controlId="releaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="number" ref={releaseDateRef} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add new Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddMovie;
