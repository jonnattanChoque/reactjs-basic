import React, { Component } from 'react';
import { Title } from '../front/Title';
import { SearchForm } from '../front/SearchForm';
import { MovieList } from '../front/MovieList';

export class Home extends Component {
  state = { results: [], usedSearch: false }

  handleResults = (results, totalResults) => {
    this.setState({ results, usedSearch: true });
  }

  renderResults() {
    return this.state.results.length === 0
      ? <p>Sin resultados 😞</p>
      : <MovieList movies={this.state.results} />;
  }

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this.handleResults} />
        </div>
        {this.state.usedSearch
          ? this.renderResults()
          : <small>Busca tu película preferida</small>}
      </div>
    );
  }
}
