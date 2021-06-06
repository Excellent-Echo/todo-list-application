import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="my-4">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
