import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h2 style={{marginTop: "50px"}}>Simple To Do List Application</h2>
      <form>
        <div className="form-group col-md-8">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <button type="submit" className="btn btn-primary" style={{marginLeft: "15px"}}>Submit</button>
      </form>       
    </div>
  );
}

export default App;
