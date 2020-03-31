import React from "react";
import CurrencyOptions from "./CurrencyOptions";
import TimeOptions from "./TimeOptions";
import "../styles/SettingsContainer.css";

const SettingsContainer = props => {
  return (
    <div className="settings-container">
      <CurrencyOptions
        sortableOptions={props.sortableOptions}
        changeCurrency={props.changeCurrency}
        currencyValue={props.currencyValue}
      />
      <TimeOptions changeRefreshTime={props.changeRefreshTime} />
    </div>
  );
};

export default SettingsContainer;
