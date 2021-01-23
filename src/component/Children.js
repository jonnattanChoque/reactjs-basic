/* eslint-disable react/require-default-props */
/* eslint-disable react/static-property-placement */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
  }

  render() {
    const {
      title, author, date, children,
    } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <article>{children}</article>
        <small>{date}</small>
      </section>
    );
  }
}

class Children extends Component {
  render() {
    return (
      <div>
        <h4>Children</h4>
        <Box date={new Date().toLocaleDateString()} title="nombre del articulo">Hola</Box>
      </div>
    );
  }
}
export default Children;
