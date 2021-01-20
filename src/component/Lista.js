/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import cars from '../data/cars.json';

class Lista extends Component {
  render() {
    const numbers = [1, 2, 3, 3, 4];
    return (
      <div>
        <p>Mi lista de números</p>
        {numbers.map((n, idx) => {
          return <p key={idx}>Mi número es: {n}</p>;
        })}
        <p>Mi lista de objetos</p>
        <ul>
          {cars.map((car) => {
            return (
              <li key={car.id}>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Nombre: </strong>{car.company}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Lista;
