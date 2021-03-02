import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "./Spinner";

function PhotoList({ images }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="photo-container">
      <Spinner />
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <Button onClick={() => {handleShow(image.id)}}>
              <img src={image.download_url} alt="Random pic" />
              <p>Author: {image.author}</p>
            </Button>
          </li>
        ))}
      </ul>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Photo By: [author]</Modal.Title>
        </Modal.Header>
        <Modal.Body>[photo]</Modal.Body>
      </Modal>
    </div>
  );
}

export default PhotoList;
