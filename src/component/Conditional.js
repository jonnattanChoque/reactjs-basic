import React, { Component } from 'react';
import ComponenteA from './ComponentA';
import ComponenteB from './ComponentB';

export default class Conditional extends Component {
  constructor() {
    super();
    this.state = { mostrarA: false };
  }

  render() {
    const useConditionalRendering = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />;
    return (
      <div>
        <h4>Condicional component</h4>
        {useConditionalRendering}
      </div>
    );
  }
}
