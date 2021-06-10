import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div className="row mt-2 bg-warning">
      <div className="col-md-9">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="col form-control"
        />
      </div>

      <div className="col-md-3">
        <button
          disabled={!name}
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-primary mx-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
