import React, { useState } from 'react';
import ToDo from './ToDo';
import AddTodo from './AddTodo';

const ToDoList = () => {
    const [toDo, setTodo] = useState('');
    const [toDoList, setTodoList] = useState([]);
    const [toDoId, setTodoId] = useState(0);
    const [categories, setCategories] = useState(['Urgent & Important','Important not urgent', 'Urgent not Important']);
    const [category, setCategory] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        if(toDo !== ''){
            setTodoList([
                ...toDoList,
                {
                    id: toDoId + 1,
                    todo: toDo,
                    complete: false, 
                    category: category
                },
            ]);
            setTodo('');
            setTodoId(toDoId+1);
        } else {
            alert('Must be filled');
        }
    }

    const changeStatus = (taskId) => {
        const newTodos = toDoList.map((items) => {
            if (items.id === taskId) {
              return {
                ...items,
                complete: !items.complete,
              };
            }
            return items;
          });
      
          setTodoList(newTodos);
    }
    
    const deleteTask = (taskId) => {
        const newTodos = toDoList.filter((items)=>{
            return items.id !== taskId;
        });

        setTodoList(newTodos);
    } 

    const doneTask = () => {
        let counter = 0;
        const doneList = toDoList.map((items)=>{
            return items.complete ? counter++ : counter
        })
        return counter
    }

    const total = () => {
       return toDoList.length;
    }

    return (
        <>
            <div className="container">
                <AddTodo
                 toDo={toDo}
                 setTodo={setTodo}
                 setCategory={setCategory}
                 categories={categories}
                 handleForm={handleForm}
                />
            </div>
            <div className="container">
                <ul>
                {toDoList.map((tDo,idx) => {
                    return ( 
                     <ToDo
                     toDo={tDo}
                     key={idx}
                     changeStatus={changeStatus}
                     deleteTask={deleteTask}
                     />
                    )
                })}
                </ul>
                <span>Done Task : {doneTask()}</span><br/>
                <span>Total Task : {total()}</span>
            </div>
        </>
    );
}

export default ToDoList;