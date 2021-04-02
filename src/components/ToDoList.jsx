import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import './todolist.css';

import ToDoForm from './ToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
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
    console.log(todos.length);
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
            onClick={() => doneTodo(index)}
          >
            V
            </button>

          {todo.text}

          <button
            className="remove"
            onClick={() => removeTodo(index)}
          >
            x
            </button>
        </li>
      </div>
    );
  };

  return (
    <>
      <div className="app">
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
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <h2>Today<span>you have {totalTask()} tasks</span></h2>
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
      </div>


    </>
  );
}

export default ToDoList;