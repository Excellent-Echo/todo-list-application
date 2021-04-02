import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './components/ToDoList';

ReactDOM.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);