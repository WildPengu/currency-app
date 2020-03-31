import React from "react";
import "../styles/Offer.css";

const Offer = props => {
  return (
    <div className="offer-container">
      <span className="offer-title">{props.title}</span>
      <div>
        <span className="offer-value">{props.value}</span>
        <span className="offer-currency">{props.actualCurrency}</span>
      </div>
    </div>
  );
};

export default Offer;
