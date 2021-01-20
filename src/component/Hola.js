import React, { Component } from 'react';

class Hola extends Component {
  render() {
    const mapped = this.props.array.map((n) => n * 3);

    return (
      <div className="App">
        <p>Hola {this.props.title}</p>
        <p>Array {this.props.array}</p>
        <p>Array join {this.props.array.join(' - ')}</p>
        <p>Array map {mapped}</p>
      </div>
    );
  }
}
export default Hola;
