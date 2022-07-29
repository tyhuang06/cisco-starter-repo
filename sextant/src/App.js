import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
	return (
		<div className="App">
			<Banner />
			<Card children={'test'} />
		</div>
	);
}

export default App;
