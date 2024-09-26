// import CoinChart from "./CoinPage/CoinChart";
import CoinPage from "./CoinPage/CoinPage";
import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";

const Body = (props) => {
  return (
    <>
      <GlobalData />
      <ListCoins {...props} />
      {/* <CoinPage /> */}
    </>
  );
};

export default Body;
