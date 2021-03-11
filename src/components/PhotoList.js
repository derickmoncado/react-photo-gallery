import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoList = ({ images }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (imageID) => {
    setShow(imageID);
  };

  return (
    <div className="photo-container">
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <Button onClick={() => handleShow(image.id)}>
              <img src={image.download_url} alt="Random pic" />
              <p>Author: {image.author}</p>
            </Button>
          </li>
        ))}
      </ul>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Photo By: author name</Modal.Title>
        </Modal.Header>
        <Modal.Body>photo goes here</Modal.Body>
      </Modal>
    </div>
  );
}

export default PhotoList;
