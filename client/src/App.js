/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Home />
				{/* <Routes>
					<Route exact path="/page/:pageNumber" component={Home} />
					<Route exact path="/" component={Home} />
				</Routes> */}
			</Router>
		</div>
	);
};

export default App;
