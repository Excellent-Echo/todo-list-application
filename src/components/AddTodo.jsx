import React from 'react';

const AddTodo = ({toDo, setTodo, categories, handleForm}) => {
    return (
        <form onSubmit={handleForm}>
            <div className="row">
                <input 
                 type="text" 
                 className="form-control col-md-12"
                 onChange={(e)=> setTodo(e.target.value)} 
                 value={toDo}
                 />
                 <select className="form-control">
                     <option value={categories[0]}>{categories[0]}</option>
                     <option value={categories[1]}>{categories[1]}</option>
                     <option value={categories[2]}>{categories[2]}</option>
                 </select>
                <input 
                type="submit" 
                className="btn-primary col-md-3" 
                value="Add"/>
            </div>
        </form>
    );
}

export default AddTodo;