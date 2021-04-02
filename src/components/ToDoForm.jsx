import React, { useState } from 'react';

// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Select from 'react-select';

import addButton from '../assets/add-button.svg';
import './todoform.css';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("0");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return alert("You haven't written anything");
    } else if (category === "0") {
      return alert ("You must choose one category");
    }
    addTodo(value);
    setValue("");
  };

  const categories = (e) => {
    setCategory(e.target.value)
  }

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
      <select
        id="dropdown"
        onChange={categories}
      >
        <option value="0">Category</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Health & Fit">Health & Fit</option>
        <option value="Shopping">Shopping</option>
      </select>
      <div className="input-group-append">
        <button
          onClick={handleSubmit}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
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