import React from "react";
import "./index.css";
const Task = ({ task, deleteTask, changeStatus }) => {
  return (
    <div className="card shadow-lg task-container p-3 mb-4">
      <h4>Task Title</h4>
      <p>Task Description</p>
      <div className="btn-task">
        <button className="btn btn-success w-25 mx-1">Complete</button>
        <button className="btn btn-danger w-25 mx-1">Remove</button>
      </div>
    </div>
  );
};

export default Task;
