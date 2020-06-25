import React from "react";

function PhotoList({ images }) {

	return (
		<div className="photo-container">
			<ul>
				{images.map(image => (
					<li key={image.id}>
						<img src={image.download_url} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PhotoList;
