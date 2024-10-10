import React from "react";
import { Link } from "react-router-dom";
import { BodyContext } from "../providers/BodyProvider";

function HistoryLog() {
  // console.log(HistoryLog);
  const { historyLog } = React.useContext(BodyContext);

  return historyLog.map((log) => (
    <Link
      to={`/coin/${log.id}`}
      key={log.id}
      className="history-log-link"
      style={{ cursor: "pointer" }}
    >
      {log.name}
    </Link>
  ));
}

export default HistoryLog;
