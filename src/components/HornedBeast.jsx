/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
  return (
    <Card
      style={{ width: '18rem' }}
      bg="dark"
      text="light"
      onClick={() => props.addFavorite(props.beast)}
    >
      <Card.Img variant="top" src={props.beast.image_url} />
      <Card.Body>
        <Card.Title>{props.beast.title}</Card.Title>
        <Card.Text>
          ❤️ = {props.likes}
        </Card.Text>
        <Card.Text>
          {props.beast.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default HornedBeast;
