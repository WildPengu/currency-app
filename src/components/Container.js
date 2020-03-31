import React from "react";
import SettingsContainer from "./SettingsContainer";
import CurrencyInfo from "./CurrencyInfo";
import Time from "./Time";
import "../styles/Container.css";

class Container extends React.Component {
  state = {
    intervalCurrencyRefetch: null,
    refreshtime: 5000,
    actualCurrency: "USD",
    currencyValue: []
  };

  componentDidMount() {
    this.setState({
      intervalCurrencyRefetch: this.startCurrencyRefetchInterval(
        this.state.refreshtime
      )
    });
    this.fetchCurrencyData();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalCurrencyRefetch);
  }

  fetchCurrencyData = () => {
    fetch("https://blockchain.info/pl/ticker")
      .then(response => response.json())
      .then(data =>
        this.setState({
          currencyValue: data
        })
      );
  };

  startCurrencyRefetchInterval = time => {
    return setInterval(() => {
      this.fetchCurrencyData();
    }, time);
  };

  changeRefreshTime = e => {
    clearInterval(this.state.intervalCurrencyRefetch);
    this.setState({
      refreshtime: e.target.value,
      intervalCurrencyRefetch: this.startCurrencyRefetchInterval(e.target.value)
    });
  };

  changeCurrency = e => {
    this.setState({
      actualCurrency: e.target.value
    });
  };

  render() {
    let currencyInfo = "";
    if (this.state.currencyValue.PLN) {
      currencyInfo = (
        <CurrencyInfo
          currencyValue={this.state.currencyValue}
          actualCurrency={this.state.actualCurrency}
        />
      );
    }

    return (
      <div className="app-container">
        <SettingsContainer
          changeRefreshTime={this.changeRefreshTime}
          changeCurrency={this.changeCurrency}
          currencyValue={this.state.currencyValue}
        />
        {currencyInfo}
        <Time />
      </div>
    );
  }
}

export default Container;
