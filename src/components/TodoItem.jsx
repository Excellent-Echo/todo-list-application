import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div className="row border bg-info">
      {/*index = <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>*/}
      <div className="col-md-7 bg-warning">
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

      <div clasName="col-md-5 bg-danger">
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary"
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
          </div>

          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
