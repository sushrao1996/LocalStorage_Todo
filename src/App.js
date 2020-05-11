import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container, Row, Col } from "reactstrap";
import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  const addTodos = todo => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const markComplete = item => {
    setTodos(todos.filter(i => i.id !== item.id));
  };
  return (
    <Container
      fluid
      className="text-center"
      style={{
        backgroundColor: "#333",
        height: "100vh"
      }}
    >
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-light">Todo with Local Storage</h1>
          <Todos todos={todos} markComplete={markComplete} />
          <TodoForm addTodos={addTodos} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
