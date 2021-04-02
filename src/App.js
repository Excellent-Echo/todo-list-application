import "./App.css";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md-7">
          <LeftContent />
        </div>
        <div className="col-md-5">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default App;
