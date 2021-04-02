import React from 'react';

const ToDo = ({toDo, changeStatus, deleteTask}) => {
    const style1 = {
        textDecoration: 'none',
        color: 'red'
      };
    
      const style2 = {
        textDecoration: 'line-through',
      };
    
      const getStyle = () => {
        return toDo.complete ? style2 : style1;
      };


    return (
        <>
            <li style={getStyle()} onClick={() => changeStatus(toDo.id)}>
                {toDo.todo}
            </li>
            <span onClick={() => deleteTask(toDo.id)}>x</span>
        </>
    );
}

export default ToDo;