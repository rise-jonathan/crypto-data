import Table from "react-bootstrap/Table";

function SearchResult() {
  return (
    <>
      <h3>Coin Search Result</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>BTC</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ethereum</td>
            <td>ETH</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tether</td>
            <td>USDT</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Binance Coin</td>
            <td>BNB</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Solana</td>
            <td>SOL</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default SearchResult;
