import React, { useState, useEffect } from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";

function App() {
	const [images, setItems] = useState([]);

	useEffect(() => {
			fetch('https://picsum.photos/v2/list')
			.then(res => res.json())
			.then(data => this.setState({
				images: data
			})
	}, [])

	return (
		<div className="App">
			<h1>Random Photo Gallery</h1>
			<PhotoList />
		</div>
	);
}

export default App;
