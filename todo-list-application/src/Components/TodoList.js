import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col, Container, Table, Card } from 'react-bootstrap';

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
        <Container className="justify-content-md-center" responsive="sm">
            <Card bg='dark'>

            <div>
                <h1>To-Do List</h1>

                <Form>
                    <Form.Group>
                        <Row >
                            <Col>
                                <Form.Control
                                    type='text'
                                    id='text'
                                    name='text'
                                    placeholder='Add new Task'
                                    onChange={(e) => handleInput(e)} />
                            </Col>
                            <Col>
                                <Button className='add-btn' onClick={addTask} >Add</Button>

                            </Col>
                        </Row>
                    </Form.Group>


                </Form>


                {taskInput !== [] ? (
                    <Table responsive="sm" >

                        <tbody>
                            {taskInput.map((t, index) => (

                                <tr key={index}>
                                    <td>{t.isCompleted ? <s style={{ margin: "0 1em" }}>{t.value}</s> : <span style={{ margin: "0 1em" }}>{t.value}</span>}</td>
                                    <td><Button className='complete' onClick={(e) => completeTask(t.id)} >Complete</Button></td>
                                    <td><Button className='delete' onClick={(e) => deleteInput(t.id)} >Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>


                    </Table>


                ) : null}



            </div>
            </Card>


        </Container>
    )
}

export default TodoList