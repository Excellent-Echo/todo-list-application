import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';
import "./Todo.css"

function TodoList() {

    const [input, setInput] = useState('');
    const [taskInput, setTaskInput] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (input !== "") {
            const inputDetails = {
                id: Math.floor(Math.random() * 1000),
                value: input,
                isCompleted: false,

            }

            setTaskInput([...taskInput, inputDetails])
        }
    };

    const deleteInput = (id) => {
        setTaskInput(taskInput.filter(t => t.id !== id))
    }

    const completeTask = (id) => {

        const element = taskInput.findIndex((elem) => elem.id === id);

        const newInput = [...taskInput];

        newInput[element] = {
            ...newInput[element],
            isCompleted: true,
        };
        setTaskInput(newInput)
    };

    console.log(taskInput);

    return (
       

            <div className="container">
                <h1 className="title">To-Do List</h1>

                <form>
                <div className="input-group">
                                <input className="input form-control form-control-lg input-keyword"
                                    type='text'
                                    id='text'
                                    name='text'
                                    placeholder='Add new Task'
                                    onChange={(e) => handleInput(e)} />
                           
                                <button className="btn btn-primary btn-lg" onClick={addTask} >Add</button>
                                </div>
                </form>

                   


                {taskInput !== [] ? (

                        <tbody>
                            {taskInput.map((t, index) => (

                                <tr key={index}>
                                    <td>{t.isCompleted ? <s style={{ margin: "0 1em" }}>{t.value}</s> : <span style={{ margin: "0 1em" }}>{t.value}</span>}</td>
                                    <td><button className='complete' onClick={(e) => completeTask(t.id)} >Complete</button></td>
                                    <td><button className='delete' onClick={(e) => deleteInput(t.id)} >Delete</button></td>
                                </tr>
                            ))}
                        </tbody>


                    


                ) : null}



            </div>
        
    )
}

export default TodoList