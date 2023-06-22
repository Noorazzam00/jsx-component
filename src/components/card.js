import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardComponent = ({src, name, desc, price}) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">Go to Cart</Button>
      </Card.Body>
    </Card>
  );
  }
export default CardComponent;
