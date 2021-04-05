import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap'

const InputData = ({ addTask }) => {
    const [task, setTask] = useState('')
    const [role, setRole] = useState('Office Boy')

    const handleForm = (e) => {
        if (!task) {
            alert('Mohon lengkapi data')
        } else {
            e.preventDefault()
            addTask(task, role)
            setTask('')
        }
    }

    return (
        <Container>
            <Row className="Input-data mt-3 mb-5">
                <Col sm="6">
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <Label for="exampleInput">Task</Label>
                            <Input
                                type="text"
                                name="addTask"
                                id="inputData"
                                placeholder="input your task"
                                onChange={(e) => setTask(e.target.value)}
                                value={task}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">Role</Label>
                            <Input type="select" name="select" id="exampleSelect" onChange={(e) => setRole(e.target.value)} value={role}>
                                <option value="Office Boy">Office Boy</option>
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                            </Input>
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default InputData
