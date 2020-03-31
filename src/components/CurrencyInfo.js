import React from "react";
import Offer from "./Offer";
import "../styles/CurrencyInfo.css";

const CurrencyInfo = props => {
  const getActualValue = currencyValue => {
    let actualCurrency = props.actualCurrency;
    let filtered = Object.keys(currencyValue).reduce((obj, key) => {
      if (key === actualCurrency) {
        obj = currencyValue[key];
      }
      return obj;
    }, {});
    return filtered;
  };
  return (
    <div className="currency-info-container">
      <Offer
        title="Kupno"
        value={getActualValue(props.currencyValue).buy}
        actualCurrency={props.actualCurrency}
      />
      <Offer
        title="Sprzedaż"
        value={getActualValue(props.currencyValue).sell}
        actualCurrency={props.actualCurrency}
      />
    </div>
  );
};

export default CurrencyInfo;
