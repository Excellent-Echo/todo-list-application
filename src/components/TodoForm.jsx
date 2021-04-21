import React, { useState, useEffect, useRef } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';

function TodoForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input,
        });
        setInput("");
    };
    return (
    <>

         <form className="todo-form" onSubmit={handleSubmit}>
             {props.edit ? (
            <div className="input-group mb-3">
             <input 
                     type="text" 
                     placeholder="Update your item" 
                     value={input}
                     name="text"
                     className="form-control"
                     onChange={handleChange}
                     ref={inputRef}
             /> 
             <div className="input-group-append">
                 <button className="btn btn-outline-secondary">Update</button>
             </div>
            </div>
                  ) : (
        <div className="input-group mb-3">
             <input 
                     type="text" 
                     placeholder="Add to do" 
                     value={input}
                     name="text"
                     className="form-control"
                     onChange={handleChange}
                     ref={inputRef}
             /> 
             <div className="input-group-append">
                 <button className="btn btn-outline-secondary">Add To Do</button>
             </div>
        </div>
            )
             }
        </form>  
    </> 
    )
}

export default TodoForm

