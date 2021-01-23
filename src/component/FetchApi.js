/* eslint-disable no-debugger */
/* eslint-disable react/state-in-constructor */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';

class FetchApi extends Component {
  state = { bpi: {} };

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((res) => res.json()).then((data) => {
      const { bpi } = data;
      this.setState({ bpi });
    });
  }

  renderCurrency = () => {
    const { bpi } = this.state;
    return Object.keys(bpi).map((currency) => (
      <div key={currency}>
        <p>1 BTC is {bpi[currency].rate} <span>{currency}</span></p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h4>Example fetch api</h4>
        {this.renderCurrency()}
      </div>
    );
  }
}
export default FetchApi;
