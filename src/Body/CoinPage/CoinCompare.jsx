import React from "react";
import Table from "react-bootstrap/Table";
import { BodyContext } from "../../providers/BodyProvider";

function CoinCompare() {
  const { compareCoinId } = React.useContext(BodyContext);

  return (
    <div>
      <h4>Compare to Another Cryptocurrency</h4>
      <label>Select currency to compare: </label>
      <select>
        <option value="">Select a currency</option>
      </select>

      <Table striped bordered hover className="table-crypto">
        <tbody>
          <tr>
            <td></td>
          </tr>

          <tr>
            <td>Market Cap</td>
            <td></td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td></td>
          </tr>
          <tr>
            <td>Volume (24h)</td>
            <td></td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
          </tr>
          <tr>
            <td>Total Supply</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CoinCompare;
