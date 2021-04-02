import React from 'react';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div className="App justify-content-center">
      <h1 className="d-flex justify-content-center">My To Do List</h1>
      <hr/>
      <ToDoList/>
    </div>
  );
}

export default App;
