import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function CoinMetrics({ name, symbol, quotes, currency, total_supply }) {
  return (
    <>
<div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h4>
          {name} ({symbol}) Metrics
        </h4>
      </div>
      <Table striped bordered hover className="table-compare">
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
