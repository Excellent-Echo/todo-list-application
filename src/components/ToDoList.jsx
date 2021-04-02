import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import path from '../assets/Path.svg';
import xshape from '../assets/xshape.svg';
import './todolist.css';

import ToDoForm from './ToDoForm';
import category from './ToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [doneTask, setDoneTask] = useState(0);
  const [activeTask, setActiveTask] = useState(0);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    const newActiveTask = activeTask + 1;
    setActiveTask(newActiveTask);
  };

  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const totalTask = () => {
    return todos.length;
  }



  const Todo = ({ todo, index, doneTodo }) => {
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
              doneTodo(index)
              const newDoneTask = doneTask + 1;
              setDoneTask(newDoneTask);
              const newActiveTask = activeTask - 1;
              setActiveTask(newActiveTask);
            }
            }
          >
            <img src={path} alt="checked" />
          </button>

          {todo.text}

          <button
            className="remove"
            onClick={() => {
              removeTodo(index)
              if (activeTask !== 0) {
                const newActiveTask = activeTask - 1;
                setActiveTask(newActiveTask);
              }
            }
            }
          >
            <img src={xshape} alt="checked" />
          </button>

          <span></span>
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
              <ToDoForm addTodo={addTodo} />
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
                  doneTodo={doneTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <div id="work" className="category">
                <h5>Work</h5>
                <p>{categoryCounter()} task(s)</p>
              </div>
            </div>
          </div>
        </div> */}
      <div className="container mt-2 mb-5">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center">
            <h2>Today<span>you have {totalTask()} task(s)</span></h2>
            <span> {doneTask} task(s) <strong>Done</strong></span>
            <span> {activeTask} task(s) <strong>Active</strong></span>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5 footer">
          <div className="row">
            <div className="text-center">
              <h5>Created by marwanjuna</h5>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default ToDoList;