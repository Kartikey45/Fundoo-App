import React, { Component } from "react";
import "./UpdateNote.scss";
import { Modal, Button } from "react-bootstrap";

export default function UpdateNote(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
      </Modal.Body> 
      <Modal.Footer>
        <Button onClick={()=>{props.onHide()}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
