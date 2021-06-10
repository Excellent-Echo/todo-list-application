import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row align-items-center bg-success">
        {/*<div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>*/}
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          ) : (
            <h5>{todo.name}</h5>
          )}
        </div>
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: editName,
              })
            );
            editable && setEditName(todo.name);
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger my-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
