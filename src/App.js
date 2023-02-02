import "./App.css";
import Navigation from "./Components/Naviagtion";
import Lines from "./Components/Lines";
import MainPage from "./Components/MainPage";

function App() {
	return (
		<div className="App">
			<Lines />
			<Navigation />
			<MainPage />
		</div>
	);
}

export default App;
