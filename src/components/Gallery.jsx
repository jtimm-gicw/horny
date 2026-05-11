/* eslint-disable react/prop-types */
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';
import rawData from './data.json';

function Gallery(props) {

  const [allBeasts, setAllBeasts] = useState(rawData);
  const [filteredBeasts, setFilteredBeasts] = useState(rawData);

  function filter(e) {
    const numHorns = parseInt(e.target.value);
    let gallery = allBeasts;
    if (numHorns) {
      gallery = allBeasts.filter((creature) => creature.horns === numHorns);
    }
    setFilteredBeasts(gallery);
  };

  function addFavorite(favoritedBeast) {
    const updatedBeasts = allBeasts.map(beast => {
      if (beast._id === favoritedBeast._id) {
        beast.favorites++;
      }
      return beast;
    });
    setAllBeasts(updatedBeasts);
    props.displayAsModal(favoritedBeast);
  }


  return (
    <div id="beast-container">
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How Many Horns?</Form.Label>
          <Form.Control as="select" onChange={filter}>
            <option value="">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Wow...</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Col>
        <Row>
          {filteredBeasts.map(beast => (
            <HornedBeast
              key={beast._id}
              beast={beast}
              displayAsModal={props.displayAsModal}
              likes={beast.favorites}
              addFavorite={addFavorite}
            />
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default Gallery;
