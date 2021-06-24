import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-7  bg-light">
            <TodoList />
          </div>
          <div className="col-md-5">
            <TodoInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
