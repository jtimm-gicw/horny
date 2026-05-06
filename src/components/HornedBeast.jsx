/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

function HornedBeast(props) {

  const [favorites, setFavorites] = useState(0);

  function addFavorite() {
    setFavorites(prev => prev + 1);;
    props.displayAsModal(props.title);
  };

  return (
    <Col>
      <Card
        className="beast-card"
        style={{ width: '18rem' }}
        onClick={addFavorite}
      >
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            ❤️ = {favorites}
          </Card.Text>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default HornedBeast;
