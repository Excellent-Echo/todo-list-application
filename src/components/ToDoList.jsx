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

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function Todo({ todo, index, completeTodo }) {
    return (
      <div 
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
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
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <ToDoForm addTodo={addTodo} />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 d-flex justify-content-center">
                        <h2>Today<span>you have 6 tasks</span></h2>
                </div>
            </div>
        </div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    </div>
    

    </>
  );
}

export default ToDoList;