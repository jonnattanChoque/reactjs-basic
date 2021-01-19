import logo from './logo.svg';
import './App.css';
import Hola from "./component/Hola";
import Number from "./component/Number";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Hola title="desde react js" array={[2, 3, 4]} />
				<Number text="Mi número es" num={1234} />
			</header>
		</div>
	);
}

export default App;
