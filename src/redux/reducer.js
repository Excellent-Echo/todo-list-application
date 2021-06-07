import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      break;

    case UPDATE_TODO:
      break;

    case DELETE_TODO:
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    default:
      break;
  }
  return state;
};
