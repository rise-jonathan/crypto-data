import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from "react-bootstrap/Alert";
import PriceNumber from "./PriceNumber";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";

function ListCoins({ selectedCurrency }) {
  const [coinList, setCoinsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    getCoinList(selectedCurrency.name)
      .then((data) => {
        setCoinsList(data.slice(0, 100));
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(
          "Coin list id not available. Error: " + error.toString()
        );
      })
      .finally(() => setIsLoading(false));
  }, [selectedCurrency.name]);

  if (isLoading) return <Alert key={"primary"}>Loading ...</Alert>;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>Volume(24h)</th>
            <th>Market Cap</th>
            <th>Max supply</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => (
            <tr key={coin.rank} onClick={() => navigate("/coin/" + coin.id)}>
              <td>{coin.rank}</td>
              <td>{coin.name}</td>
              <td>
                <PriceNumber
                  value={coin.quotes[selectedCurrency.name]?.price}
                  symbol={selectedCurrency.symbol}
                />
              </td>
              <td>{coin.quotes[selectedCurrency.name]?.percent_change_1h}</td>
              <td>{coin.quotes[selectedCurrency.name]?.percent_change_24h}</td>
              <td>{coin.quotes[selectedCurrency.name]?.percent_change_7d}</td>
              <td>
                <PriceNumber
                  value={coin.quotes[selectedCurrency.name]?.volume_24h}
                  symbol={selectedCurrency.symbol}
                />
              </td>
              <td>
                <PriceNumber
                  value={coin.quotes[selectedCurrency.name]?.market_cap}
                  symbol={selectedCurrency.symbol}
                />
              </td>
              <td>{coin.max_supply}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ErrorModal
        errorMessage={errorMessage}
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default ListCoins;
