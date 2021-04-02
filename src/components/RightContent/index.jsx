import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ButtonAdd from "../ButtonAdd";
import "./index.css";
import Task from "../Task";

const RightContent = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="right-container">
      <div className="right-header">
        <ButtonAdd handleButton={handleShow}/>
      </div>
      <div className="right-content">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

      <Modal show={showModal} onHide={handleClose} size="md">
        <Modal.Header>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="form-control mb-3"/>
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" className="form-control mb-3"/>
                <input type="submit" value="Submit" className="btn btn-success form-control"/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RightContent;
