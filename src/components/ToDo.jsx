import React from 'react';

const ToDo = ({toDo,key}) => {
    return (
        <>
            <li>{toDo.todo}</li>
        </>
    );
}

export default ToDo;