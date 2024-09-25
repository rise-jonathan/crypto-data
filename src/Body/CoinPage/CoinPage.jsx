import React from "react";
import CoinPriceSection from "./CoinPriceSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from "./ChartPeriods";
import Button from "react-bootstrap/Button";
import ChartModal from "./ChartModal";
import { getCoinMetricsById } from "../../services/api";

function CoinPage({ selectedCurrency }) {
  const [chartModalShow, setChartModalShow] = React.useState(false);
  const [coinMetrics, setCoinMetrics] = React.useState({});

  const handleShow = () => setChartModalShow(true);
  const handleClose = () => setChartModalShow(false);

  React.useEffect(() => {
    getCoinMetricsById(`btc-bitcoin`).then(setCoinMetrics);
  }, []);

  return (
    <>
      <CoinPriceSection />
      <Row>
        <Col md={4}>
          <CoinMetrics
            name={coinMetrics.name}
            symbol={coinMetrics.symbol}
            market_cap={coinMetrics.quotes?.USD?.market_cap}
            percent_change_1h={coinMetrics.quotes?.USD?.percent_change_1h}
            volume_24h={coinMetrics.quotes?.USD?.volume_24h}
            circulating_supply={coinMetrics.circulating_supply}
          />
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
