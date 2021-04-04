import React from "react";

import './Categories.css';

const Categories = ({ personalTask, workTask, healthTask, shoppingTask }) => {  

  return (
    <div className="container mt-3 categories">
      <div className="row">
        <div className="col-sm-12 d-flex flex-column">
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
  );
};

export default Categories;