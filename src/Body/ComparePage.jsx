import React from "react";
import { BodyContext } from "../providers/BodyProvider";
import { Table } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { compareTableData } from "./constants";
import { useSelector } from "react-redux";
import lodash from "lodash";

function ComparePage() {
  const { compareList } = React.useContext(BodyContext);
  const selectedCurrency = useSelector((state) => state.selectedCurrency);

  const tableData = React.useMemo(() => {
    if (!compareList.length) return null;

    const labelData = compareTableData(selectedCurrency.name);

    return labelData.map(({ label, path }) => [
      label,
      ...compareList.map((coin) => lodash.get(coin, path)),
    ]);
  }, [compareList]);


  if (!compareList.length) return <Alert>No coins to compare</Alert>;
  return (
    <>
      <div
        style={{
          backgroundColor: "#1B2A41",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h4>COMPARE</h4>
        <Table striped bordered hover className="table-compare">
          <tbody>
            {tableData.map((data, i) => (
              <tr key={i}>
                {data.map((d) => (
                  <td key={d}>{d}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ComparePage;
