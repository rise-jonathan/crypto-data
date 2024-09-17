import React from "react";
import { Row, Col, Form, FloatingLabel, InputGroup } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  from: {
    amount: 0,
    coin: "USD",
  },
  to: {
    amount: 0,
    coin: "BTC",
  },
};

function Converter() {
  const [values, setValues] = React.useState(initialState);

  const handleClick = () => {
    setValues({
      from: values.to,
      to: values.from,
    });
  };

  const handleOnChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [field]: {
        ...values[field],
        amount: value,
      },
    });
  };

  const handleOnSelect = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [field]: {
        ...values[field],
        coin: value,
      },
    });
  };

  return (
    <Row className="g-3 justify-content-center mb-4" style={{ width: "27rem" }}>
      <Col md={5} xs={12}>
        <InputGroup>
          <FloatingLabel controlId="fromInput" label="From">
            <Form.Control
              name="from"
              type="text"
              placeholder="0"
              value={values.from.amount}
              onChange={handleOnChange}
              // className="bg-dark text-light"
            />
          </FloatingLabel>
          <FloatingLabel controlId="from" label="Coin">
            <Form.Select
              name="from"
              value={values.from.coin}
              onChange={handleOnSelect}
            >
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option>
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
      <Col
        md={2}
        xs={12}
        className="text-center d-flex align-items-center justify-content-center"
      >
        <FontAwesomeIcon
          icon={faArrowsRotate}
          onClick={handleClick}
          style={{ fontSize: "24px", cursor: "pointer", color: "#000" }}
        />
      </Col>
      <Col md={5} sm={12}>
        <InputGroup>
          <FloatingLabel controlId="toInput" label="To">
            <Form.Control
              name="to"
              type="text"
              placeholder="0"
              value={values.to.amount}
              onChange={handleOnChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="to" label="Coin">
            <Form.Select
              name="to"
              value={values.to.coin}
              onChange={handleOnSelect}
              // className="bg-dark text-light"
            >
              <option value="USD">USD</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Converter;
