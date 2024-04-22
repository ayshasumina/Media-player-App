import React, {useState} from 'react'
import { Modal, Button , Form, FloatingLabel} from 'react-bootstrap'

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <div className="d-flex align-items-center">
            <h5>Upload New Video</h5>
            <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder'>+</button>
          </div>
         
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!!</p>
          <div className='border rounded p-3'>
          <FloatingLabel controlId="floatingInputCaption" label="Video Caption"className="mb-3">
              <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputImage" label="Image URL"className="mb-3">
              <Form.Control type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputURL" label="YouTube URL"className="mb-3">
              <Form.Control type="text" placeholder="YouTube URL" />
          </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
        </Modal>
        </>

    )
}

export default Add