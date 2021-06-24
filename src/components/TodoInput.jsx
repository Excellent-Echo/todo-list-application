import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div className="row mt-5 bg-white">
      <div className="col-md-9">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Input Todo"
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
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
