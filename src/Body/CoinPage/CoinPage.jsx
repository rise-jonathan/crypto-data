import React from "react";
import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
import Button from "react-bootstrap/Button";
import ChartModal from "./ChartModal";
import { getCoinById } from "../../services/api";

function CoinPage({ selectedCurrency }) {
  const [chartModalShow, setChartModalShow] = React.useState(false);
  const [coinData, setCoinData] = React.useState([]);

  const handleShow = () => setChartModalShow(true);
  const handleClose = () => setChartModalShow(false);

  React.useEffect(() => {
    getCoinById("btc-bitcoin", selectedCurrency.name).then(setCoinData);
  }, [selectedCurrency]);

  console.log(coinData);

  return (
    <>
      <CoinPriceSection />
      <Row>
        <Col md={4}>
          <CoinMetrics {...coinData} currency={selectedCurrency} />
        </Col>
        <Col md={8}>
          <CoinChart />
          <Row>
            <Col>
              <ChartPeriods />
            </Col>
            <Col>
              <Button onClick={handleShow} variant="primary">
                Zoom
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <ChartModal show={chartModalShow} handleClose={handleClose}>
        <CoinChart />
        <ChartPeriods />
      </ChartModal>
    </>
  );
}

export default CoinPage;
