import React from "react";
import { Table } from "react-bootstrap";
import { BodyContext } from "../providers/BodyProvider";

function ExchangeList() {
  // console.log("ExchangeList");

  const { exchangeList } = React.useContext(BodyContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {exchangeList.slice(0, 10).map((exchange) => (
          <tr key={exchange.id}>
            <td>{exchange.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ExchangeList;
