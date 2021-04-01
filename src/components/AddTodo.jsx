import React from 'react';

const AddTodo = () => {
    return (
        <form>
            <div className="mb-3">
                <input 
                 type="text" 
                 className="form-control col-md-6" 
                 id=""
                 />
                <input type="submit" className="btn-primary" value="Add"/>
            </div>
        </form>
    );
}

export default AddTodo;