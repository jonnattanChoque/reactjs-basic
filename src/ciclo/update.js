import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALS = {
  cat: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
  dolphin: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_1280.jpg',
  panda: 'https://cdn.pixabay.com/photo/2016/03/04/22/54/panda-1236875_1280.jpg',
};

const ANIM = Object.keys(ANIMALS);

class AnimalImage extends Component {
  state = { src: ANIMALS[this.props.animal] }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ src: ANIMALS[props.animal] });
  }

  /* se puede importar PureComponent para evitar usar este método,
  para ello se importa y se extiende la clase con PureComponent
  en vez de Component, pero solo aplica para validaciones sencillas
  */
  shouldComponentUpdate(nextProps) {
    return this.props.animal !== nextProps.animal;
  }

  UNSAFE_componentWillUpdate(nextProps, nextStates) {
    const img = document.querySelector('img');
    img.animate([{
      filter: 'blur(0px)',
    }, {
      filter: 'blur(2px)',
    }], {
      duration: 500,
      easing: 'ease',
    });
  }

  render() {
    console.log('-> render');
    return (
      <div>
        <p>selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="240" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIM),
};

class Update extends Component {
  state = { animal: 'panda' };

  renderAnimalButton = (animal) => (
    <button disabled={animal === this.state.animal} key={animal} type="button" onClick={() => this.setState({ animal })}>{animal}</button>
  )

  render() {
    return (
      <div>
        <h4>Ciclo de actualización</h4>
        {ANIM.map(this.renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    );
  }
}

export default Update;
