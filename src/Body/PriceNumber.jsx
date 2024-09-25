import React from "react";
import { NumericFormat } from "react-number-format";

function PriceNumber({ value, symbol }) {
  return (
    <NumericFormat
      value={value}
      thousandSeparator=" "
      displayType="text"
      prefix={symbol}
    />
  );
}

export default PriceNumber;
