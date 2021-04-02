import React, { useState } from 'react';
import ToDo from './ToDo';
import AddTodo from './AddTodo';

const ToDoList = () => {
    const [toDo, setTodo] = useState('');
    const [toDoList, setTodoList] = useState([]);
    const [toDoId, setTodoId] = useState(0);

    const handleForm = (e) => {
        e.preventDefault();
        if(toDo !== ''){
        setTodoList([
            ...toDoList,
            {
                id: toDoId + 1,
                todo: toDo,
                complete: false, 
            },
        ]);
        setTodo('');
        setTodoId(toDoId+1);
    } else {alert('Must be filled')}
    }

    return (
        <>
            <div className="container">
                <AddTodo
                 toDo = {toDo}
                 setTodo = {setTodo}
                 handleForm = {handleForm}
                />
            </div>
            <div className="container">
                {console.log(toDoList)}
                {toDoList.map((tDo,idx) => {
                    return ( 
                     <ToDo
                     toDo={tDo}
                     //key={idx}
                     />
                    )
                })}
            </div>
        </>
    );
}

export default ToDoList;