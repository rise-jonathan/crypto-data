import React from "react";
import Table from "react-bootstrap/Table";
import { getGlobalData } from "../services/api";
import { BodyContext } from "../providers/BodyProvider";

function GlobalData() {
  const [globalData, setGlobalData] = React.useState({});

  const { exchangeList } = React.useContext(BodyContext);

  React.useEffect(() => {
    getGlobalData().then(setGlobalData);
  }, []);

  return (
    <Table striped bordered hover className="table-custom">
      <tbody>
        <tr>
          <td>BTC</td>
          <td>{globalData.bitcoin_dominance_percentage} %</td>
        </tr>
        <tr>
          <td>Vol 24h</td>
          <td>{globalData.volume_24h_ath_value}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td>{globalData.market_cap_usd}</td>
        </tr>
        <tr>
          <td>Exchange count</td>
          <td>{exchangeList.length}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default GlobalData;
