import React from "react";

// css
import "./App.css";

// components
import Lists from "./components/Lists";

function App() {
  return (
    <div className="App">
      <p className="text-yellow-900 text-3xl">Your To Do List</p>
      <Lists />
    </div>
  );
}

export default App;
