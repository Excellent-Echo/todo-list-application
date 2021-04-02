import React from 'react';

const AddTodo = ({toDo, setTodo, handleForm}) => {
    return (
        <form onSubmit={handleForm}>
            <div className="mb-6">
                <input 
                 type="text" 
                 className="form-control col-md-12"
                 onChange={(e)=> setTodo(e.target.value)} 
                 value={toDo}
                 />
                <input 
                type="submit" 
                className="btn-primary col-md-3" 
                value="Add"/>
            </div>
        </form>
    );
}

export default AddTodo;