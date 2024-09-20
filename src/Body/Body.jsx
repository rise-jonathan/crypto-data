// import CoinChart from "./CoinPage/CoinChart";
import CoinPage from "./CoinPage/CoinPage";
import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
// import ModalChart from "./ModalChart";

const Body = () => {
  return (
    <>
      <GlobalData />
      <ListCoins />
      <CoinPage />
      {/* <CoinChart />
      <ModalChart /> */}
    </>
  );
};

export default Body;
