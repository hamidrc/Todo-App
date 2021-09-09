import React, { useState } from "react";
import AppForm from "./AppForm";
import "./style.css";

export default function AppList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    console.log("todo:", todo);
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const todoItems = todos.map((todo, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{todo.text}</li>
  ));

  return (
    <div>
      <AppForm onSubmit={addTodo} />
      <div type="checkbox" className="list-box">{todoItems}</div>
    </div>
  );
}
