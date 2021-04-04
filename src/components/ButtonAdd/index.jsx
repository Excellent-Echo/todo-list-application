import React from "react";

const ButtonAdd = ({ handleButton }) => {
  return (
    <div>
      <button className="btn btn-primary btn-lg" onClick={handleButton}>Add New Task</button>
    </div>
  );
};

export default ButtonAdd;
