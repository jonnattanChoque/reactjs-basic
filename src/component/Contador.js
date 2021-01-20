import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return (
      <span>{this.state.contador}</span>
    );
  }
}
export default Contador;
