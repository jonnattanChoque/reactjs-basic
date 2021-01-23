/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Events extends Component {
  constructor() {
    super();
    this.state = { mouseX: 0, mouseY: 0 };
  }

  handlerClick() {
    // eslint-disable-next-line no-alert
    alert('hola 2');
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({ mouseX: clientX, mouseY: clientY });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => alert('hola')}>Da clic</button>
        <button type="button" onClick={this.handlerClick}>Da clic2</button>
        <div onMouseMove={this.handleMouseMove} style={{ border: '1px solid #fff', padding: 10, marginTop: 10 }}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}

export default Events;
