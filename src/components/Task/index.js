import React from "react";
import "./index.css";
const Task = ({ task, deleteTask, changeStatus }) => {
  const cekStatus = () => {
    if (task.complete === false) {
      return (
        <button
          className="btn btn-success w-25 mx-1"
          onClick={() => changeStatus(task.id)}
        >
          Complete
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-outline-success w-50 mx-1 disabled"
          onClick={() => changeStatus(task.id)}
        >
          Task is Completed !
        </button>
      );
    }
  };

  return (
    <div className="card shadow-lg task-container p-3 mb-4">
      <h4>{task.title}</h4>
      <p>{task.desc}</p>
      <div className="btn-task">
        {cekStatus()}
        <button
          className="btn btn-danger w-25 mx-1"
          onClick={() => deleteTask(task.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Task;
