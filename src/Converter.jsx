import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  from: 0,
  to: 0,
};

const fromCoin = "BTC";
const toCoin = "USD";
const initialCoins = { fromCoin, toCoin };

function Converter() {
  const [values, setValues] = React.useState(initialState);
  const [coin, setCoin] = React.useState(initialCoins);
  const [leftToRight, setLeftToRight] = React.useState(true);

  const handleClick = () => {
    setValues({
      from: values.to,
      to: values.from,
    });
    setCoin({
      fromCoin: coin.toCoin,
      toCoin: coin.fromCoin,
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
              onChange={(e) => setValues({ ...values, from: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="from" label="Coin">
            <Form.Select
              value={coin.fromCoin}
              onChange={(e) => setCoin({ ...coin, fromCoin: e.target.value })}
            >
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option>
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
              onChange={(e) => setValues({ ...values, to: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="to" label="Coin">
            <Form.Select
              value={coin.toCoin}
              onChange={(e) => setCoin({ ...coin, toCoin: e.target.value })}
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
