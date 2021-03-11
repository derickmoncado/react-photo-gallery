import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoList = ({ images }) => {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (imageID) => {
    setShow(imageID);
  }
  const imageToShow = images.find((img) => (img.id === show));

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

      <Modal show={!!imageToShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Photo By: {imageToShow?.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageToShow?.download_url} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PhotoList;
