import React, { Component } from 'react';

const API_KEY = '235410fc';

export class SearchForm extends Component {
  state = {
    inputMovie: '',
  }

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`;
    fetch(url).then((res) => res.json()).then((results) => {
      const { Search = [], totalResults = '0' } = results;
      this.props.onResults(Search, totalResults);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Find a repository"
            onChange={this.handleChange} />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}
