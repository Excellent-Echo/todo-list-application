import React, { useState } from 'react';
import ToDo from './ToDo';
import AddTodo from './AddTodo';

const ToDoList = () => {
    const [toDo, setTodo] = useState('');
    const [toDoList, setTodoList] = useState([]);

    return (
        <>
            <div className="container">
                <h1>My To Do List</h1>
                <hr/>
                <AddTodo/>
            </div>
            <div className="container">
                <ToDo/>
            </div>
        </>
    );
}

export default ToDoList;