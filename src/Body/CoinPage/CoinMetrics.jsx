import React from "react";
import Table from "react-bootstrap/Table";

function CoinMetrics({ name, symbol, quotes, currency, total_supply }) {
  return (
    <>
      <h4>
        {name} ({symbol}) Metrics
      </h4>

      <Table striped bordered hover className="table-crypto">
        <tbody>
          <tr>
            <td>Market Cap</td>
            <td>
              {quotes?.[currency.name]?.market_cap} {currency.symbol}
            </td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td>
              {quotes?.[currency.name]?.ath_price} {currency.symbol}
            </td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td>
              {quotes?.[currency.name]?.volume_24h} {currency.symbol}
            </td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td>{quotes?.[currency.name]?.volume_24h_change_24h}</td>
          </tr>
          <tr>
            <td>Total Supply</td>
            <td>{total_supply}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CoinMetrics;
