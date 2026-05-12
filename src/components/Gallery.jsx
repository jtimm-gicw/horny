/* eslint-disable react/prop-types */
// 🧱 React Bootstrap Components
import { Container, Row, Form } from 'react-bootstrap';

// 🐉 Individual Beast Card Component
import HornedBeast from './HornedBeast';

function Gallery(props) {

  return (

    // 🖼️ Main Gallery Container
    <Container className="gallery">

      {/* 🦄 FILTER DROPDOWN
          --------------------------------
          This dropdown lets the user filter
          beasts by number of horns.

          IMPORTANT:
          The state lives in App.jsx
          We are ONLY updating it here.
      */}
      <Form className="horn-filter">

        <Form.Select

          // 🧠 Controlled Component
          // The dropdown value comes from state in App
          value={props.selectedHorns}

          // 🧠 When user changes selection:
          // update state in App.jsx
          onChange={(e) =>
            props.setSelectedHorns(e.target.value)
          }
        >

          {/* 🦄 Dropdown Options */}
          <option value="all">All Horns</option>
          <option value="1">1 Horn</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="100">100 Horns</option>

        </Form.Select>

      </Form>

      {/* 🐉 Beast Cards Grid */}
      <Row xs={1} md={3} className="g-4">

        {/* 🧠 Map over array to render cards */}
        {props.allBeasts.map((beast, idx) => (

          <HornedBeast
            key={idx}

            // 🦄 Full beast object
            beast={beast}

            // 🖼️ Individual props
            src={beast.image_url}
            title={beast.title}
            description={beast.description}

            // 🧠 Function passed from App
            displayAsModal={props.displayAsModal}
          />

        ))}

      </Row>

    </Container>
  );
}

export default Gallery;