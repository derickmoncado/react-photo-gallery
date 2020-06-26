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
						<Button onClick={handleShow}>
							<img src={image.download_url} />
							<p>Author: {image.author}</p>
						</Button>
					</li>
				))}
			</ul>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>author goes here</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					image goes here
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default PhotoList;
