import React from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { getSearch } from "../services/api";

function SearchResult() {
  const { q } = useParams();
  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    getSearch(q).then(setResult);
  }, [q]);

  return (
    <>
      <h3>Coin Search Result: {q}</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {result.currencies?.map((currency) => (
            <tr key={currency.id}>
              <td>{currency.rank}</td>
              <td> {currency.name}</td>
              <td> {currency.symbol}</td>
            </tr>
          ))}
          <tr>
            <td>2</td>
            <td>Ethereum</td>
            <td>ETH</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tether</td>
            <td>USDT</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Binance Coin</td>
            <td>BNB</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sol</td>
            <td>SOL</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default SearchResult;
