import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import {persistTodos} from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{marginTop: "50px"}}>Simple To Do List Application</h1>
      <InputField />
      <TodosList />
      <div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
