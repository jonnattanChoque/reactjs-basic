import React, { Component } from 'react';
import BitCoinContent from './Presenter';

class BitCoinContainer extends Component {
  state = { bpi: {} };

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((res) => res.json()).then((data) => {
      const { bpi } = data;
      this.setState({ bpi });
    });
  }

  render() {
    return (
      <BitCoinContent bpi={this.state.bpi} />
    );
  }
}

export default BitCoinContainer;
