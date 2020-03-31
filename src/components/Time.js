import React, { Component } from "react";
import "../styles/Time.css";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalCurrentTime: null,
      actualTime: ""
    };
  }

  componentDidMount() {
    this.setState({
      actualTime: this.getFormatedTime()
    });
    this.startCurrentTimeInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalCurrentTime);
  }

  formatTimeUnit = time => (time < 10 ? "0" + time : time);
  getFormatedTime = () => {
    let date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    return `
    ${this.formatTimeUnit(hours)}:
    ${this.formatTimeUnit(min)}:
    ${this.formatTimeUnit(sec)}
     / ${day}.${month}.${year}`;
  };

  startCurrentTimeInterval = () => {
    this.setState({
      intervalCurrentTime: setInterval(() => {
        this.setState({
          actualTime: this.getFormatedTime()
        });
      }, 1000)
    });
  };

  render() {
    return <div className="time-container">{this.state.actualTime}</div>;
  }
}

export default Time;
