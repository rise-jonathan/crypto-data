import React from "react";
import Table from "react-bootstrap/Table";

function CoinMetrics({
  name,
  symbol,
  market_cap,
  percent_change_1h,
  volume_24h,
  circulating_supply,
}) {
  // const [coinInfo, setCoinInfo] = React.useState([]);
  // const [marketData, setMarketData] = React.useState([]);

  return (
    <>
      <h3>
        {name} ({symbol}) Metrics
      </h3>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Market Cap</td>
            <td>{market_cap ? `$${market_cap}` : "N/A"}</td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td>{percent_change_1h ? `${percent_change_1h}%` : "N/A"}</td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td>{volume_24h ? `$${volume_24h}` : "N/A"}</td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td></td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td>{circulating_supply ? circulating_supply : "N/A"}</td>
          </tr>
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
}
export default CoinMetrics;
