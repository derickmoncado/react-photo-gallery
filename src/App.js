import React, { useState, useEffect } from "react";
import "./App.scss";
import PhotoList from "./components/PhotoList";

function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
			fetch('https://picsum.photos/v2/list')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setImages(data)
			})
	}, [])

	return (
		<div className="App">
			<h1>Random Photo Gallery</h1>
			<PhotoList allThePhotos={images} />
		</div>
	);
}

export default App;
