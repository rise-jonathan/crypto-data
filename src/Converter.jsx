import React from "react";
import { Row, Col, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  fromValue: 0,
  toValue: 0,
  fromCoin: 'BTC',
  toCoin: 'USD',
};

// const fromCoin = "BTC";
// const toCoin = "USD";
// const initialCoins = { fromCoin, toCoin };

function Converter() {
  // const [values, setValues] = React.useState(initialState);
  const [state, setState] = React.useState(initialState);
  // const [coin, setCoin] = React.useState(initialCoins);
  // const [leftToRight, setLeftToRight] = React.useState(true);

  const handleClick = () => {
    // setValues({
    //   from: values.to,
    //   to: values.from,
    // });
    // setCoin({
    //   fromCoin: coin.toCoin,
    //   toCoin: coin.fromCoin,
    // });
    // setLeftToRight(!leftToRight);
    setState((prevState) => ({
      ...prevState,
      fromValue: prevState.toValue,
      toValue: prevState.fromValue,
      fromCoin: prevState.toCoin,
      toCoin: prevState.fromCoin,
    }));
  };

  return (
    <Row className="g-3 justify-content-center mb-4" >
      <Col md={5} xs={12} >
        <InputGroup>
          <FloatingLabel controlId="fromInput" label="From">
            <Form.Control
              type="text"
              placeholder="0"
              // value={values.from}
              // onChange={(e) => setValues({ ...values, from: e.target.value })}
              value={state.fromValue}
              onChange={(e) => setState({ ...state, fromValue: e.target.value })}
              className="bg-dark text-light"
            />
          </FloatingLabel>
          <FloatingLabel controlId="from" label="Coin">
            <Form.Select
              /* // value={coin.fromCoin}
              // onChange={(e) => setCoin({ ...coin, fromCoin: e.target.value })} */
              value={state.fromCoin}
              onChange={(e) => setState({ ...state, fromCoin: e.target.value })}
            >
              <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option>
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
      <Col md={2} xs={12} className="text-center d-flex align-items-center justify-content-center">
        <FontAwesomeIcon
          icon={faArrowsRotate}
          onClick={handleClick}
          style={{ fontSize: "24px", cursor: "pointer", color: "#ffffff" }} />
      </Col>
      <Col md={5} sm={12}>
        <InputGroup>
          <FloatingLabel controlId="toInput" label="To">
            <Form.Control
              type="text"
              placeholder="0"
              value={state.toValue}
              onChange={(e) => setState({ ...state, toValue: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="to" label="Coin">
            <Form.Select
              value={state.toCoin}
              onChange={(e) => setState({ ...state, toCoin: e.target.value })}
              className="bg-dark text-light"
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
