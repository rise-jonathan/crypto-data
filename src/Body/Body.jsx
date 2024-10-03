import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./CoinPage";
import SearchResult from "./SearchResult";
import ErrorModal from "./ErrorModal";

const Body = (props) => {
  return (
    <>
      <GlobalData />
      <Routes>
        <Route path="/" element={<ListCoins {...props} />} />
        <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
        <Route path="/search/:q" element={<SearchResult />} />
      </Routes>
      <ErrorModal />
    </>
  );
};

export default Body;
