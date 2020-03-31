import React from "react";
import "../styles/CurrencyOptions.css";

const CurrencyOptions = props => {
  const options = Object.keys(props.currencyValue).map(name => {
    return (
      <option key={name} value={name}>
        {name}
      </option>
    );
  });
  return (
    <div className="currency-options">
      <select onChange={props.changeCurrency}>{options}</select>
    </div>
  );
};

export default CurrencyOptions;
