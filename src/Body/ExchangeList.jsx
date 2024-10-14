import React from "react";
import { Table } from "react-bootstrap";
import { BodyContext } from "../providers/BodyProvider";

function ExchangeList() {

  const { exchangeList } = React.useContext(BodyContext);

  return (
    <>
      <div
        style={{
          backgroundColor: "#1B2A41",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h4>MARKETS</h4>
        <Table striped bordered hover className="table-crypto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Currency</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {exchangeList.slice(0, 10).map((exchange) => (
              <tr key={exchange.id}>
                <td>{exchange.name}</td>
                <td>{exchange.currencies}</td>
                <td>
                  {exchange.links?.website?.[0] ? (
                    <a
                      href={exchange.links.website[0]}
                      target="_blank"
                      // rel="noopener noreferrer"
                      className="table-link"
                    >
                      {exchange.links.website[0]}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ExchangeList;
