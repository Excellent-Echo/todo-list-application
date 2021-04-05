import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import TaskCard from './TaskCard'

const TaskList = ({ tasks, completeTask, editTask, removeTask, tasksRemaining }) => {
    let newTasks = tasks
    let groupTasks = {}
    const taskArray = []

    newTasks.forEach((task) => {
        if (!task.role) return // exit (maybe add them to a "no_make" category)

        if (!groupTasks[task.role]) groupTasks[task.role] = [{ completed: task.completed, title: task.title }]
        else groupTasks[task.role].push({ completed: task.completed, title: task.title })
    })
    // taskArray.push(groupTasks)

    // console.log(taskArray.title)

    console.log(groupTasks)

    return (
        <Container>
            <Row>
                {tasks.map((task, index) => (
                    <Col sm="12" md="4">
                        <h4 style={{ textAlign: 'center' }}>
                            {task.role} ({tasksRemaining})
                        </h4>
                        <TaskCard
                            key={index}
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            editTask={editTask}
                            removeTask={removeTask}
                        />
                    </Col>
                ))}

                {/* {groupTasks.map((task, index) => (
                    <Col sm="12" md="4">
                        <h4 style={{ textAlign: 'center' }}>
                            {task.role} ({tasksRemaining})
                        </h4>
                        <TaskCard task={task} index={index} completeTask={completeTask} editTask={editTask} removeTask={removeTask} />
                    </Col>
                ))} */}
            </Row>
        </Container>
    )
}

export default TaskList
