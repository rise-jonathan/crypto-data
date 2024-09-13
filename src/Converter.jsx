import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  from: 100,
  to: 500,
};
function Converter() {
  const [values, setValues] = React.useState(initialState);
  const [leftToRight, setLeftToRight] = React.useState(true);

  const handleClick = () => {
    setValues({
      from: values.to,
      to: values.from,
    });
    setLeftToRight(!leftToRight);
  };

  return (
    <Row className="g-2">
      <Col md>
        <InputGroup>
          <FloatingLabel controlId="fromInput" label="From">
            <Form.Control
              type="text"
              placeholder="0"
              value={values.from}
              defaultValue={values.from}
            />
          </FloatingLabel>
          <FloatingLabel controlId="from" label="Coin">
            <Form.Select>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
      <Col>
        <FontAwesomeIcon icon={faArrowsRotate} onClick={handleClick} />
      </Col>
      <Col md>
        <InputGroup>
          <FloatingLabel controlId="toInput" label="To">
            <Form.Control
              type="text"
              placeholder="0"
              value={values.to}
              defaultValue={values.to}
            />
          </FloatingLabel>
          <FloatingLabel controlId="to" label="Coin">
            <Form.Select>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Converter;

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// function Converter() {
//   return (
//     <>
//       <InputGroup className="mb-3">
//         <Form.Control aria-label="Text input with dropdown button" />

//         <DropdownButton
//           variant="outline-secondary"
//           title="Dropdown"
//           id="input-group-dropdown-2"
//           align="end"
//         >
//           <Dropdown.Item href="#">Action</Dropdown.Item>
//           <Dropdown.Item href="#">Another action</Dropdown.Item>
//           <Dropdown.Item href="#">Something else here</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item href="#">Separated link</Dropdown.Item>
//         </DropdownButton>
//       </InputGroup>

//       <InputGroup>
//         <Form.Control aria-label="Text input with 2 dropdown buttons" />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Control aria-label="Text input with dropdown button" />

//         <DropdownButton
//           variant="outline-secondary"
//           title="Dropdown"
//           id="input-group-dropdown-2"
//           align="end"
//         >
//           <Dropdown.Item href="#">Action</Dropdown.Item>
//           <Dropdown.Item href="#">Another action</Dropdown.Item>
//           <Dropdown.Item href="#">Something else here</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item href="#">Separated link</Dropdown.Item>
//         </DropdownButton>
//       </InputGroup>
//     </>
//   );
// }

// export default Converter;
