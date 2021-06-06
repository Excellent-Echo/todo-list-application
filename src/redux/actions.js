export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "ADD_TODO";
export const DELETE_TODO = "ADD_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const updateTodo = (todoId) => {
  return {
    type: UPDATE_TODO,
    payload: todoId,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};
