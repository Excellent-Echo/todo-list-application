import React, { useState } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import addButton from '../assets/add-button.svg';
import './todoform.css';

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
      <DropdownButton id="dropdown-basic-button" title="Categories">
        <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Work</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Health & Fit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Shopping</Dropdown.Item>
      </DropdownButton>
      <div className="input-group-append">
        <button
          onClick={handleSubmit}
          className="btn btn-outline-secondary"
          type="button" id="button-addon2"
        >
          <img src={addButton}
            className="img-fluid mx-auto"
            alt="" />
        </button>
      </div>
    </form>
  );
}

export default ToDoForm