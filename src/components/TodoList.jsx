import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>
        <img
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMzUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00OCAxM3YxMGgtMTR2LTEyaDE0eiIgZmlsbD0iI2I0ZGQ3ZiIvPjxwYXRoIGQ9Im0zNCAyOWgxNHYxMmgtMTR6IiBmaWxsPSIjZTZlOWVkIi8+PHBhdGggZD0ibTYxIDUzLTEwIDZ2LTYtNnoiIGZpbGw9IiNhYWIyYmQiLz48cGF0aCBkPSJtNTEgNTN2NmgtMjlsLS4wNC0uMDFjLjAzLS4xNi4wNC0uMzIuMDQtLjQ5di01LjV6IiBmaWxsPSIjZmZlYWE3Ii8+PHBhdGggZD0ibTIyIDQ3aDI5djZoLTI5eiIgZmlsbD0iI2ZmODI2ZSIvPjxwYXRoIGQ9Im0xNSAzOHYyIDE4LjVjMCAxLjkzLTEuNTcgMy41LTMuNSAzLjUtLjk2IDAtMS44NC0uMzktMi40Ny0xLjAzLS42NC0uNjMtMS4wMy0xLjUxLTEuMDMtMi40N3YtMjAuNXoiIGZpbGw9IiM4MzhmOWIiLz48cGF0aCBkPSJtMjIgNTN2NS41YzAgLjE3LS4wMS4zMy0uMDQuNDktLjIzIDEuNy0xLjcgMy4wMS0zLjQ2IDMuMDEtLjk2IDAtMS44NC0uMzktMi40Ny0xLjAzLS42NC0uNjMtMS4wMy0xLjUxLTEuMDMtMi40N3YtMTguNS0yaDN2LTRoNHY2IDd6IiBmaWxsPSIjODM4ZjliIi8+PHBhdGggZD0ibTE4IDI0djEwIDRoLTMtN3YtNWg1LjVjLjY5IDAgMS4zMi0uMjggMS43Ny0uNzNzLjczLTEuMDguNzMtMS43N2MwLTEuMzgtMS4xMi0yLjUtMi41LTIuNWgtNS41di00eiIgZmlsbD0iI2U2ZTllZCIvPjxwYXRoIGQ9Im0yMiAzNGgtNHYtMTBoLTEwdjRoNS41YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41IDAgLjY5LS4yOCAxLjMyLS43MyAxLjc3cy0xLjA4LjczLTEuNzcuNzNoLTUuNS0yYy0yLjIxIDAtNC0xLjc5LTQtNHYtM2MwLTUuNTIgNC40OC0xMCAxMC0xMGgzIDJjNS41MiAwIDEwIDQuNDggMTAgMTB2MTBjMCAyLjIxLTEuNzkgNC00IDRoLTF6IiBmaWxsPSIjZmNkNzcwIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI5IiBmaWxsPSIjZjBkMGI0IiByPSI3Ii8+PHBhdGggZD0ibTIzIDQ2di01YzIuNzU3IDAgNS0yLjI0MyA1LTV2LTEwYzAtNS4wOTMtMy40ODQtOS4zNzYtOC4xOS0xMC42MjMgMS45MzMtMS40NjEgMy4xOS0zLjc3MiAzLjE5LTYuMzc3IDAtNC40MTEtMy41ODktOC04LThzLTggMy41ODktOCA4YzAgMi40OTggMS4xNTIgNC43MyAyLjk1MSA2LjE5OS01LjA4OC45NjMtOC45NTEgNS40MzYtOC45NTEgMTAuODAxdjNjMCAyLjc1NyAyLjI0MyA1IDUgNWgxdjQgMSAxOS41YzAgMi40ODEgMi4wMTkgNC41IDQuNSA0LjUgMS40MjEgMCAyLjY3NS0uNjc1IDMuNS0xLjcwNi44MjUgMS4wMzEgMi4wNzkgMS43MDYgMy41IDEuNzA2IDEuOTUzIDAgMy42MDItMS4yNTggNC4yMjQtM2gyOC41NTNsMTEuNjY3LTctMTEuNjY3LTd6bTAgOGgyN3Y0aC0yN3ptMjctNnY0aC0yN3YtNHptLTQxLTM5YzAtMy4zMDkgMi42OTEtNiA2LTZzNiAyLjY5MSA2IDYtMi42OTEgNi02IDYtNi0yLjY5MS02LTZ6bS02IDIwdi0zYzAtNC45NjIgNC4wMzgtOSA5LTloMyAyYzQuOTYyIDAgOSA0LjAzOCA5IDl2MTBjMCAxLjY1NC0xLjM0NiAzLTMgM3YtMTZoLTJ2MTBoLTJ2LTEwaC0xMnY0aC0ydjJoOC41Yy44MjcgMCAxLjUuNjczIDEuNSAxLjVzLS42NzMgMS41LTEuNSAxLjVoLTcuNWMtMS42NTQgMC0zLTEuMzQ2LTMtM3ptMTAuNSA1YzEuOTMgMCAzLjUtMS41NyAzLjUtMy41cy0xLjU3LTMuNS0zLjUtMy41aC00LjV2LTJoOHY1LjUgNi41aC04di0zem0tMiAyN2MtMS4zNzggMC0yLjUtMS4xMjItMi41LTIuNXYtMTkuNWg1djEgMTguNWMwIDEuMzc4LTEuMTIyIDIuNS0yLjUgMi41em03IDBjLTEuMzc4IDAtMi41LTEuMTIyLTIuNS0yLjV2LTE4LjUtMWgzdi00aDJ2MjMuNWMwIDEuMzc4LTEuMTIyIDIuNS0yLjUgMi41em0zMy41LTMuNzY2di04LjQ2OGw3LjA1NiA0LjIzNHoiLz48cGF0aCBkPSJtNDkgMjhoLTE2djE0aDE2em0tMiAxMmgtMTJ2LTEwaDEyeiIvPjxwYXRoIGQ9Im00OSAxMy40MTQgNC43MDctNC43MDctMS40MTQtMS40MTQtMy4yOTMgMy4yOTN2LS41ODZoLTE2djE0aDE2em0tMTQgOC41ODZ2LTEwaDEydi41ODZsLTYgNi0zLjI5My0zLjI5My0xLjQxNCAxLjQxNCA0LjcwNyA0LjcwNyA2LTZ2Ni41ODZ6Ii8+PHBhdGggZD0ibTUxIDI4aDEydjJoLTEyeiIvPjxwYXRoIGQ9Im01MSAyMmgxMnYyaC0xMnoiLz48cGF0aCBkPSJtNTEgMThoMTJ2MmgtMTJ6Ii8+PHBhdGggZD0ibTUxIDE0aDEydjJoLTEyeiIvPjxwYXRoIGQ9Im01NSAxMGg4djJoLTh6Ii8+PHBhdGggZD0ibTUxIDMyaDEydjJoLTEyeiIvPjxwYXRoIGQ9Im02MSAzNmgydjJoLTJ6Ii8+PHBhdGggZD0ibTUxIDM2aDh2MmgtOHoiLz48cGF0aCBkPSJtNTEgNDBoMTJ2MmgtMTJ6Ii8+PC9zdmc+"
          alt=""
          width="35"
        />
        what's to do?
      </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
