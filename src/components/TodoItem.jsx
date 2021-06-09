import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{todo.id.length > 1 ? todo.id[4] : todo.id}</div>
        <div className="col">
          <h4>{todo.name}</h4>
        </div>
        <button className="btn btn-primary m-2">Edit</button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
