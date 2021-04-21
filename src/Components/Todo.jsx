  
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { BiEditAlt } from 'react-icons/bi';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <IoCloseCircleSharp
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <BiEditAlt
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
      <div><img src="/beground.jpg" alt="background"/></div>
    </div>
  ));
};

export default Todo;