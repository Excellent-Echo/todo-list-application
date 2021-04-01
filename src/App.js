import React from 'react';
import './App.css';

function Task({ task, index, doneTask, removeTask }) {
  return (
    <div 
      className = "task"
      style = {{ textDecoration: task.isDone ? "line-through" : "" }}
    >
      { task.task }

      <div>
        <button onClick = {() => doneTask(index)}>
          Done  
        </button>
        <button onClick = {() => removeTask(index)}>
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
      />
    </form>
  )
}

function App() {

  const [tasks, setTasks] = React.useState([
    
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
  );
}

export default App;