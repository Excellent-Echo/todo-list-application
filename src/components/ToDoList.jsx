import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import './todolist.css';

import ToDoForm from './ToDoForm';
import DisplayToDo from './DisplayToDo';
import StatusTask from './StatusTask';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [doneTask, setDoneTask] = useState(0);
  const [activeTask, setActiveTask] = useState(0);

  const addTask = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    const newActiveTask = activeTask + 1;
    setActiveTask(newActiveTask);
  };

  const completeTask = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTask = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <div id="logo">
              <img src={logo} className="img-fluid mx-auto d-block" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="">
            <div className="input-group mb-3">
              <ToDoForm
                addTask={addTask} 
              />
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <ul id="task-list" className="list-group">
              {todos.map((todo, index) => (
                <DisplayToDo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  doneTask={doneTask}
                  setDoneTask={setDoneTask}
                  activeTask={activeTask}
                  setActiveTask={setActiveTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <StatusTask
        totalTask={todos.length}
        doneTask={doneTask}
        activeTask={activeTask}
      />
    </>
  );
}

export default ToDoList;