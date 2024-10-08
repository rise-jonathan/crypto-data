import React from "react";
import { getExchangeList, getCompareCoinId } from "../services/api";

export const BodyContext = React.createContext();

function BodyProvider({ children, id, currency }) {
  const [historyLog, setHistoryLog] = React.useState([]);
  const [exchangeList, setExchangeList] = React.useState([]);
  const [compareCoinId, setCompareCoinId] = React.useState([]);

  React.useEffect(() => {
    getExchangeList().then(setExchangeList);
  }, []);
  // console.log(exchangeList);

  React.useEffect(() => {
    console.log("currency:", currency);
    console.log("id:", id);

    if (currency && id) {
      getCompareCoinId(id, currency)
        .then((data) => {
          if (!data.error) {
            setCompareCoinId(data);
          } else {
            console.error("Error fetching compare list:", data.error);
          }
        })
        .catch((error) => console.error("API call failed:", error));
    }
  }, [currency, id]);

  console.log(compareCoinId);

  const context = {
    exchangeList,
    historyLog,
    setHistoryLog,
    compareCoinId,
  };

  return (
    <BodyContext.Provider value={context}> {children} </BodyContext.Provider>
  );
}

export default BodyProvider;
