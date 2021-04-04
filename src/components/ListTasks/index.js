import React from "react";
import Task from "../Task";

const ListTasks = ({ listTasks, deleteTask, changeStatus }) => {
  return (
    <div>
      {listTasks.map((task, index) => {
        return (
          <Task
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        );
      })}
    </div>
  );
};

export default ListTasks;
