import React from "react";
import { NumericFormat } from "react-number-format";

function PriceNumber({ value }) {
  return (
    <NumericFormat value={value} thousandSeparator=" " displayType="text" />
  );
}

export default PriceNumber;
