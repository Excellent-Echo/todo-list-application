import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import'bootstrap/dist/css/bootstrap.min.css';


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        
        const newTodos = [todo, ...todos] 

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const completeTodo = id =>{
        let updateTodos = todos.map(todo =>{
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updateTodos);
    }

    const style = {
        width : "25rem",
    }

    const getStyle = () => {
        return  style;
      };

    return (
        <>
        <div className="container">
            <h1 className="mt-5">What's Your Task today?</h1>
            <TodoForm onSubmit={addTodo}/>
        <div class="row row-cols-3">

        <div className="container">
        <div className="card col-sm bg-primary" style={getStyle()}>
            <div className="card-body">
                <h5 className="card-title">Home</h5>
                <Todo 
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
        </div>
    </div>
</div>
<div className="container">
    <div className="card col-sm bg-success" style={getStyle()}>
        <div className="card-body">
            <h5 className="card-title">Job</h5>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    </div>
</div>
<div className="container">
    <div className="card col-sm bg-info" style={getStyle()}>
        <div className="card-body">
            <h5 className="card-title">College</h5>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    </div>
</div>
</div>
</div>
        </>
    )
}

export default TodoList
