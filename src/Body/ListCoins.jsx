import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from "react-bootstrap/Alert";
import PriceNumber from "./PriceNumber";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage, setCoinList } from "../services/store";

function ListCoins() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const selectedCurrency = useSelector((state) => state.selectedCurrency);
  const coinList = useSelector((state) => state.coinList);

  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    getCoinList(selectedCurrency.name)
      .then((data) => {
        dispatch(setCoinList(data.slice(0, 100)));
      })
      .catch((error) => {
        dispatch(
          setErrorMessage("Coin list is not available. - " + error.toString())
        );
      })
      .finally(() => setIsLoading(false));
  }, [selectedCurrency.name]);

  if (isLoading) return <Alert key={"primary"}>Loading ...</Alert>;

  return (
    <>
      <Table striped bordered hover className="table-crypto">
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListCoins;
