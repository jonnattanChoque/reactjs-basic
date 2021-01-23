/* eslint-disable no-return-assign */
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputTwiiter: '@',
      inputTerm: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputName.value;
    const twitter = this.inputTwiiter.value;
    const term = this.inputTerm.value;
    console.log({ name, twitter, term });
  }

  handleChange = (e) => {
    this.setState({ inputTerm: e.target.checked });
  }

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre
              <input id="name" name="username" placeholder="Escribe tu nombre" value={this.state.inputName} onChange={(e) => this.setState({ inputName: e.target.value })} ref={(inputElement) => this.inputName = inputElement} />
            </label>
          </p>
          <p>
            <label htmlFor="twitter">Twitter
              <input id="twitter" name="twitterAccount" placeholder="Escribe tu twitter" value={this.state.inputTwiiter} onChange={(e) => this.setState({ inputTwiiter: e.target.value })} ref={(inputElement) => this.inputTwiiter = inputElement} />
            </label>
          </p>
          <p>
            <label htmlFor="uno">Twitter
              <input type="checkbox" id="uno" onChange={this.handleChange} checked={this.state.inputTerm} ref={(inputElement) => this.inputTerm = inputElement} />
            </label>
          </p>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
export default Form;
