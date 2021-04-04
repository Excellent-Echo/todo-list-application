import React from "react";


const StatusTask = ({ totalTask, doneTask, activeTask }) => {

  return (
    <div className="container mt-2 mb-5">
      <div className="row">
        <div className="col-sm-12 d-flex flex-column align-items-center">
          <h2>Today<span>you have {totalTask()} task(s)</span></h2>
          <span> {doneTask} task(s) <strong>Done</strong></span>
          <span> {activeTask} task(s) <strong>Active</strong></span>
        </div>
      </div>
    </div>
  );
};

export default StatusTask;