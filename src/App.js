import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />

				<Footer />
			</Fragment>
		);
	}
}

export default App;
