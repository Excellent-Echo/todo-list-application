import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ButtonAdd from "../ButtonAdd";
import "./index.css";
import ListTasks from "../ListTasks";

const RightContent = () => {

  //modal hooks
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [listTasks, setListTasks] = useState([]);


  const handleForm = e =>{
      e.preventDefault();

      setListTasks([
        ...listTasks, 
        {
          title : taskTitle,
          desc:taskDesc,
          complete:false, 
          id : taskId
        }
      ]);

      setTaskId(taskId + 1);
      setTaskTitle("");
      setTaskDesc("");
      handleClose()
  }

  const deleteTask = (id)=>{
    const newListTasks = listTasks.filter((task)=>task.id !== id);
    setListTasks(newListTasks);
  } 

  const changeStatus = (id)=>{
    const newListTask = listTasks.map((task)=>task.id === id?{...task, complete:true}:task);
    setListTasks(newListTask);
  }
  
  return (
    <div className="right-container">
      <div className="right-header">
        <ButtonAdd handleButton={handleShow}/>
      </div>
      
      <ListTasks listTasks={listTasks} deleteTask={deleteTask} changeStatus={changeStatus}/>

      <Modal show={showModal} onHide={handleClose} size="md">
        <Modal.Header>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleForm}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="form-control mb-3" onChange={e=>{setTaskTitle(e.target.value)}}/>
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" className="form-control mb-3" onChange={e=>{setTaskDesc(e.target.value)}}/>
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
