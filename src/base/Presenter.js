/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class BitCoinContent extends Component {
  renderCurrency = () => {
    const { bpi } = this.props;

    return Object.keys(bpi).map((currency) => (
      <div key={currency}>
        <p>1 BTC is {bpi[currency].rate} <span>{bpi[currency].code}</span></p>
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

export default BitCoinContent;
