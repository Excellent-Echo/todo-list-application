import React, { useState } from 'react';

import addButton from '../assets/add-button.svg';
import './todoform.css';

const ToDoForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("0");
  const [personalTask, setPersonalTask] = useState(0);
  const [workTask, setWorkTask] = useState(0);
  const [healthTask, setHealthTask] = useState(0);
  const [shoppingTask, setShoppingTask] = useState(0);


  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return alert("You haven't written anything");
    } else if (category === "0") {
      return alert("You must choose one category");
    }
    addTask(value);
    setValue("");

    if (category === "Personal") {
      const newPersonalTask = personalTask + 1;
      setPersonalTask(newPersonalTask);
      return personalTask;
    } else if (category === "Work") {
      const newWorkTask = workTask + 1;
      setWorkTask(newWorkTask);
      return workTask;
    } else if (category === "Health & Fit") {
      const newHealthTask = healthTask + 1;
      setHealthTask(newHealthTask);
      return healthTask;
    } else if (category === "Shopping") {
      const newShoppingTask = shoppingTask + 1;
      setShoppingTask(newShoppingTask);
      return shoppingTask;
    }

  };

  const categories = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className="container">
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
          <option value="Health &amp; Fit">Health &amp; Fit</option>
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
      <div className="container mt-3 categories">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div id="personal" className="category">
              <p>Personal</p>
              <p>{personalTask} task(s)</p>
            </div>
            <div id="work" className="category">
              <p>Work</p>
              <p>{workTask} task(s)</p>
            </div>
            <div id="health" className="category">
              <p>Health &amp; Fit</p>
              <p>{healthTask} task(s)</p>
            </div>
            <div id="shopping" className="category">
              <p>Shopping</p>
              <p>{shoppingTask} task(s)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoForm;