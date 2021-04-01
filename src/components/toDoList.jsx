import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function TodoList() {
  return (
    <div className="container">
      <h2 style={{marginTop: "50px"}}>Simple To Do List Application</h2>
      <Form>
        <Form.Group controlId="FormToDoList">
            <Form.Label>Input Your To Do Here</Form.Label>
            <Form.Control size="md" type="text" placeholder="I want to" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" size="md">
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        <br />
        <div className="d-flex justify-content-between">
          <div className="p-2 col-example text-left">Home</div>
          <div className="p-2 col-example text-left">Work</div>
          <div className="p-2 col-example text-left">Study</div>
        </div>      
    </div>
  );
}

export default TodoList;
