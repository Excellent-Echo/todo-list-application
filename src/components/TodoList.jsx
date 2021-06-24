import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todos = useSelector((state) => state);
  return (
    <>
      <h3 className="mt-5 text-warning">My Todo List</h3>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
