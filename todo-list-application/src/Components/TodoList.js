import React, { useState } from 'react';

function TodoList() {

    const [input, setInput] = useState('');
    const [taskInput, setTaskInput] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const addTask = () => {
        if (input !== "") {
            const inputDetails = {
                id: Math.floor(Math.random() * 1000),
                value: input,
                isCompleted: false,

            }

            setTaskInput([...taskInput, inputDetails])
        }
    };

    const deleteInput = (e, id) => {
        e.preventDefault();
        setTaskInput(taskInput.filter(t => t.id !== id))
    }

    const completeTask = (e, id) => {
        e.preventDefault();

        const element =taskInput.findIndex((elem) => elem.id == id);

        const newInput= [...taskInput];

        newInput[element] = {
            ...newInput[element],
            isCompleted : true,
        };
            setTaskInput(newInput)
    };

    return (
        <div>
            <h1>To-Do List</h1>
            
            <form>

                <input
                    type='text'
                    id='text'
                    name='text'
                    placeholder='Add new Task'
                    onChange={(e) => handleInput(e)} />
                <button className='add-btn' onClick={addTask} >Add</button>
            </form>


            {taskInput !== [] ? (
                <ul>
                    {taskInput.map((t) => (
                        <li className={t.isCompleted ? 'crosstext' : 'listitem'}>{t.value}
                        <button className='complete' onClick={(e) => completeTask(t.id)} ></button>
                        <button className='delete' onClick={(e) => deleteInput(t.id)} ></button>
                        
                        </li>
                    ))}
                </ul>


            ) : null}



        </div>
    )
}

export default TodoList
