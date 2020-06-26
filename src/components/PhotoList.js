import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PhotoList({ images }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="photo-container">
			<ul>
				{images.map(image => (
					<li key={image.id}>
						<img src={image.download_url} />
						<p>Author: {image.author}</p>
					</li>
				))}
			</ul>

			<hr />

			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			</Modal>
		</div>
	);
}

export default PhotoList;
