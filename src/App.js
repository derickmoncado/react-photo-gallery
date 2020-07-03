import React, { useState, useEffect } from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch('https://picsum.photos/v2/list?page=2&limit=16')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setImages(data)
		})
	}, [])

	return (
		<div className="App">
			<h1>Random Photo Gallery App</h1>
			<PhotoList images={images} />
		</div>
	);
}

export default App;
