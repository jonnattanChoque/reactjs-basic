import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hola from './component/Hola';
// import Number from './component/Number';
// import Contador from './component/Contador';
// import Conditional from './component/Conditional';
// import Lista from './component/Lista';
import Events from './component/Events';
import Form from './component/Form';
import Children from './component/Children';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Contador />
        <Hola title="desde react js" array={[2, 3, 4]} />
        <Number text="Mi número es" num={1234} />
        <Conditional />
        <Lista /> */}
        <Events />
        <Form />
        <Children />
      </header>
    </div>
  );
}

export default App;
