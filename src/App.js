import React from 'react';
import './App.css';
import logo from './assets/doit-logo.svg';

// import { Container, Row, Col, Form, Card, Alert, Button, Tabl } from 'react-bootstrap';
// import 'bootstrap/dist/css/boostrap.min.css';

function Task({ task, index, doneTask, removeTask }) {
  return (
    <div 
      className = "task"
      style = {{ textDecoration: task.isDone ? "line-through" : "" }}
    >
        <h2>
          { task.task }
        </h2>

      <div>
        <button className="btn-done" onClick = {() => doneTask(index)}>
          Done  
        </button>
        <button className="btn-del" onClick = {() => removeTask(index)}>
          Delete
        </button>        
      </div>
    </div>
  );
};

function TaskForm({ addTask }) {
  const [ value, setVal ] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if ( !value ) return;
    addTask(value);
    setVal("");
  };

  return (
    <form onSubmit = { handleSubmit }>
      <input
        type = "text"
        className = "addTask"
        value = { value }
        onChange = { e => setVal(e.target.value) }
        placeholder = "Enter new task here"
      />
    </form>
  )
}

function App() {

  const [tasks, setTasks] = React.useState([
    {
      task: "Complete this app",
      isDone: false
    },
  ]);

  const addTask = task => {
    const newTasks = [...tasks, { task }];
    setTasks( newTasks );
  }

  const doneTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks);
  }

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <div>
        <div className="lg-container">
          <img src= { logo } alt="logo"/>
        </div>
        <div className="task-list">
          { tasks.map((task, index) => (
            <Task
              key = { index }
              index = { index }
              task = { task }
              doneTask = { doneTask }
              removeTask = { removeTask }
            />
          ))}

          <TaskForm addTask = { addTask } />

        </div>
      </div>
    </div>
  );
}

export default App;