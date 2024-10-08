import React from "react";
import { getExchangeList } from "../services/api";

export const BodyContext = React.createContext();

function BodyProvider({ children }) {
  const [historyLog, setHistoryLog] = React.useState([]);
  const [exchangeList, setExchangeList] = React.useState([]);
  const [compareList, setCompareList] = React.useState([]);

  React.useEffect(() => {
    getExchangeList().then(setExchangeList);
  }, []);
  // console.log(exchangeList);

  const context = {
    compareList,
    setCompareList,
    // clearCompareList: () => setCompareList([]),
    exchangeList,
    historyLog,
    setHistoryLog,
  };

  return (
    <BodyContext.Provider value={context}> {children} </BodyContext.Provider>
  );
}

export default BodyProvider;
