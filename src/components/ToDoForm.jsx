import React, { useState } from 'react';

import addButton from '../assets/add-button.svg';
import './todolist.css';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            className="input" 
            placeholder="What do you want to do?" 
            aria-label="What do you want to do?" 
            aria-describedby="button-addon2"
            value={value}
            onChange={e => setValue(e.target.value)}    
        />
        <div className="input-group-append">
            <button 
                className="btn btn-outline-secondary" 
                type="button" id="button-addon2"
            >
                <img src={addButton} 
                    className="img-fluid mx-auto"
                    alt=""/>
            </button>
            </div>
    </form>
  );
}

export default ToDoForm