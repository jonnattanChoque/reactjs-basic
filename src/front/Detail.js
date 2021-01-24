/* eslint-disable class-methods-use-this */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '235410fc';

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  state = { movie: {} }

  componentDidMount() {
    const { id } = this.props;
    this.fetchMovie({ id });
  }

  fetchMovie({ id }) {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    fetch(url).then((res) => res.json()).then((movie) => {
      console.log(movie);
      this.setState({ movie });
    });
  }

  goBack() {
    window.history.back();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

    return (
      <div>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
        <button type="button" onClick={this.goBack}>Volver</button>
      </div>
    );
  }
}
