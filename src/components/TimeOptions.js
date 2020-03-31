import React from "react";
import "../styles/TimeOptions.css";

const second = 1000;
const refreshTimeOptions = [5 * second, 10 * second, 30 * second, 60 * second];

const TimeOptions = props => {
  const options = refreshTimeOptions.map((option, key) => {
    return (
      <option key={key} value={option}>
        {option / 1000 + "s"}
      </option>
    );
  });
  return (
    <div className="time-options">
      <select onChange={props.changeRefreshTime}>{options}</select>
      <div className="orange-box">
        <i className="fa fa-clock-o"></i>
      </div>
    </div>
  );
};

export default TimeOptions;
