import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import { Detail } from './front/Detail';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

// import BitCoinContainer from './base/Logic';
// import Hola from './component/Hola';
// import Number from './component/Number';
// import Contador from './component/Contador';
// import Conditional from './component/Conditional';
// import Lista from './component/Lista';
// import Events from './component/Events';
// import Form from './component/Form';
// import Children from './component/Children';
// import FetchApi from './component/FetchApi';
// import Update from './ciclo/update';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Contador />
        <Hola title="desde react js" array={[2, 3, 4]} />
        <Number text="Mi número es" num={1234} />
        <Conditional />
        <Lista />
        <Events />
        <Form />
        <Children />
        <FetchApi />
        <Update />
        <BitCoinContainer /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
