import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./CoinPage";
import SearchResult from "./SearchResult";
import ErrorModal from "./ErrorModal";
import BodyProvider from "../providers/BodyProvider";
import ExchangeList from "./ExchangeList";
import HistoryLog from "./HistoryLog";
import CoinCompare from "./CoinPage/CoinCompare";

const Body = (props) => {
  return (
    <>
      <BodyProvider currency="USD" id="bitcoin-id">
        <HistoryLog />
        <GlobalData />
        <Routes>
          <Route path="/" element={<ListCoins {...props} />} />
          <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
          <Route path="/search/:q" element={<SearchResult />} />
          <Route path="/exchanges" element={<ExchangeList />} />
          <Route path="/compare" element={<CoinCompare />} />
        </Routes>
        <ErrorModal />
      </BodyProvider>
    </>
  );
};

export default Body;
