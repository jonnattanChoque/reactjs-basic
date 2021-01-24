/* eslint-disable react/require-default-props */
/* eslint-disable class-methods-use-this */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const API_KEY = '235410fc';

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  }

  state = { movie: {} }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie({ id });
  }

  fetchMovie({ id }) {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    fetch(url).then((res) => res.json()).then((movie) => {
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
        <Link className="button is-info" to="/">
            Volver a la portada
        </Link>
      </div>
    );
  }
}
