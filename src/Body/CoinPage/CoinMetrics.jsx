import React from "react";
import Table from "react-bootstrap/Table";

function CoinMetrics({ name, symbol }) {
  const [coinInfo, setCoinInfo] = React.useState([]);
  const [marketData, setMarketData] = React.useState([]);

  return (
    <>
      <h3>
        {name} ({symbol}) Metrics
      </h3>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Market Cap</td>
            <td>{marketData.rank}</td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td>$ {marketData.max_supply}</td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td>${marketData.total_supply}</td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td>%{marketData.volume_24h_usd}</td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td>
              {marketData.circulating_supply} {coinInfo.symbol}
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
}

export default CoinMetrics;
