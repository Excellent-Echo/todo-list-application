import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import path from '../assets/Path.svg';
import xshape from '../assets/xshape.svg';
import './todolist.css';

import ToDoForm from './ToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [doneTask, setDoneTask] = useState(0);
  const [activeTask, setActiveTask] = useState(0);

  const addTask = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    const newActiveTask = activeTask + 1;
    setActiveTask(newActiveTask);
  };

  const completeTask = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTask = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const totalTask = () => {
    return todos.length;
  }


  const Todo = ({ todo, index, completeTask }) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >

        <li
          className="list-group-item">
          <button
            className="done"
            onClick={() => {
              completeTask(index)
              const newDoneTask = doneTask + 1;
              setDoneTask(newDoneTask);
              const newActiveTask = activeTask - 1;
              setActiveTask(newActiveTask);
            }
            }
          >
            <img src={path} alt="checked" />
          </button>

          <strong>{todo.text}</strong>

          <button
            className="remove"
            onClick={() => {
              removeTask(index)
              if (activeTask !== 0) {
                const newActiveTask = activeTask - 1;
                setActiveTask(newActiveTask);
              }
            }
            }
          >
            <img src={xshape} alt="checked" />
          </button>
        </li>
      </div >
    );
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
              <ToDoForm addTask={addTask} />
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <ul id="task-list" className="list-group">
              {todos.map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTask={completeTask}
                  removeTask={removeTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-2 mb-5">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center">
            <h2>Today<span>you have {totalTask()} task(s)</span></h2>
            <span> {doneTask} task(s) <strong>Done</strong></span>
            <span> {activeTask} task(s) <strong>Active</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;