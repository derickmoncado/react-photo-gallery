import React, { useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoList = ({ images }) => {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (imageID) => {
    setShow(imageID);
  }
  const imageToShow = useMemo(() => images.find((img) => (img.id === show)), [images, show]);

  return (
    <div className="photo-container">
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <Button onClick={() => handleShow(image.id)}>
              <img src={image.download_url} alt={`Shot By: ${image.author}`} />
              <p>Author: {image.author}</p>
            </Button>
          </li>
        ))}
      </ul>

      <Modal size="lg" show={!!imageToShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Photo By: {imageToShow?.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageToShow?.download_url} alt={`Shot By: ${imageToShow?.author}`} width="100%" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PhotoList;
