import React from "react";
import { Row, Col, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { getCoinList, getConverter } from "../../services/api";

const initialState = {
  from: {
    amount: 1,
    coin: "btc-bitcoin",
  },
  to: {
    amount: 1,
    coin: "eth-ethereum",
  },
};

function Converter() {
  const [values, setValues] = React.useState(initialState);
  const [coinList, setCoinList] = React.useState([]);

  React.useEffect(() => {
    const fetchCoins = async () => {
      const coins = await getCoinList('EUR');
      setCoinList(coins);
    };

    fetchCoins();
  }, []);

  React.useEffect(() => {
    const fetchExchanges = async () => {
      const result = await getConverter({
        base_currency_id: values.from.coin,
        quote_currency_id: values.to.coin,
        amount: values.from.amount,
      });

      setValues((prevValues) => ({
        ...prevValues,
        to: {
          ...prevValues.to,
          amount: result.price || 0,
        },
      }));
    };

    if (values.from.amount && values.from.coin && values.to.coin) {
      fetchExchanges();
    }
  }, [values.from.amount, values.from.coin, values.to.coin]);


  const handleClick = () => {
    setValues((prevValues) => ({
      from: prevValues.to,
      to: prevValues.from,
    }));
  };

  const handleOnChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [field]: {
        ...prevValues[field],
        amount: value || "",
      },
    }));
  };


  const handleOnSelect = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [field]: {
        ...setValues[field],
        coin: value || "",
      },
    }));
  };

  return (
    <Row className="g-3 justify-content-center mb-4" style={{ width: "27rem" }}>
      <Col md={5} xs={12}>
        <InputGroup>
          <FloatingLabel controlId="from" label="From">
            <Form.Control
              name="from"
              type="text"
              placeholder="0"
              value={values.from.amount || ""}
              onChange={handleOnChange}
            // className="bg-dark text-light"
            />
          </FloatingLabel>
          <FloatingLabel controlId="fromCoin" label="Coin">
            <Form.Select
              name="from"
              value={values.from.coin || ""}
              onChange={handleOnSelect}
            >
              {/* <option value="BTC">BTC</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option> */}
              {coinList.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol})
                </option>
              ))};
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
          <FloatingLabel controlId="toCoin" label="Coin">
            <Form.Select
              name="to"
              value={values.to.coin || ""}
              onChange={handleOnSelect}
            >
              {/* <option value="USD">USD</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option> */}
              {coinList.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol})
                </option>
              ))};
            </Form.Select>
          </FloatingLabel>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Converter;
