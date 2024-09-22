import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinInfo, getCoinMarketData } from "../../services/api";



function CoinMetrics() {
  const [coinInfo, setCoinInfo] = React.useState([]);
  const [marketData, setMarketData] = React.useState([]);

  React.useEffect(() => {

    const coinId = "btc-bitcoin";

    getCoinInfo(coinId).then(setCoinInfo);

    getCoinMarketData(coinId).then(setMarketData);

  }, []);

  console.log(CoinMetrics)

  return (
    <>
      <h3>{coinInfo.name} ({coinInfo.symbol}) Metrics</h3>

      <Table striped bordered hover>
        <tbody>

          <tr>
            <td>Market Cap</td>
            <td>{marketData.rank}</td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td>$ {marketData.max_supply.toLocaleString('en-US').replace(/,/g, ' ')}</td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td>${marketData.total_supply.toLocaleString('en-US').replace(/,/g, ' ')}</td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td>%{(marketData.volume_24h_usd)}</td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td>{marketData.circulating_supply} {coinInfo.symbol}</td>
          </tr>
          <tr></tr>

        </tbody>
      </Table>
    </>
  );
}

export default CoinMetrics;
