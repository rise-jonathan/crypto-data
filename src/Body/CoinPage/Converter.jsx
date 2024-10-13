import React from "react";
import { Row, Col, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { getPriceConverter } from "../../services/api";
import { useSelector } from "react-redux";
import lodash from "lodash";

const initialState = {
  from: {
    amount: 0,
    coin: "btc-bitcoin",
  },
  to: {
    amount: 0,
    coin: "eth-ethereum",
  },
};

// CONVERTER 
function Converter() {
  const [values, setValues] = React.useState(initialState);

  const coinList = useSelector((state) => state.coinList);

  const converterDebounce = React.useCallback(
    lodash.debounce(async (values) => {
      const data = await getPriceConverter({
        baseCurrency: values.from.coin,
        quoteCurrency: values.to.coin,
        amount: values.from.amount,
      });

      setValues({
        ...values,
        to: {
          ...values.to,
          amount: data.price,
        },
      });
    }, 1000),
    []
  );

  React.useEffect(() => {
    converterDebounce(values);
  }, [values.from.amount, values.from.coin, values.to.coin]);

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

  if (!coinList.length) return null;

  return (
    <Row className="g-1 justify-content-center mb-4" style={{ width: "27rem" }}>
      <Col md={5} xs={12}>
        <InputGroup>
          <FloatingLabel controlId="fromInput" label="From">
            <Form.Control
              name="from"
              type="text"
              placeholder="0"
              value={values.from.amount || ""}
              onChange={handleOnChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="from" label="Coin">
            <Form.Select
              name="from"
              value={values.from.coin || ""}
              onChange={handleOnSelect}
            >
              {coinList.map((coin) => (
                <option key={coin.id} value={coin.id}>
                </option>
              ))}
              ;
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
              value={values.to.amount || ""}
              onChange={handleOnChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="to" label="Coin">
            <Form.Select
              name="to"
              value={values.to.coin || ""}
              onChange={handleOnSelect}
            >
              {coinList.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
              ;
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Converter;
