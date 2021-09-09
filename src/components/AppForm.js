import React, { useState } from "react";
import "./style.css";

export default function AppForm(props) {
  const [input, setinput] = useState();
  const [todos, setTodos] = useState([]);

  const handleinput = (e) => {
    setinput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    console.log("value: ", input);
  };

  return (
    <div>
      <div className="app-header">Todo App</div>
      <div className="functions-box">
        <form onSubmit={handleSubmit}>
          <input
            className="search-box"
            onChange={handleinput}
            type="text"
            placeholder="Add your task here!"></input>
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
