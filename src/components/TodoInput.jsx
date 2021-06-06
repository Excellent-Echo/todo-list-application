import React from "react";

const TodoInput = () => {
  return (
    <div>
      <div className="row m-2">
        <input type="text" className="col form-control" />
        <button className="col-2 btn btn-primary ms-2">Add</button>
      </div>
    </div>
  );
};

export default TodoInput;
