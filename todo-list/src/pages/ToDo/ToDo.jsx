// Matr. Nr. 2571020

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ToDo.css";
import ToDoItem from "./ToDoItrem/ToDoItem";

const ToDo = ({ updateDays, toDoStore }) => {
  const { id } = useParams();
  const [newItem, setNewItem] = useState("");

  // Update the input field value continual during input
  const handleInput = (event) => {
    setNewItem(event.target.value);
  };

  // Add a new item to the to-do list on enter
  const addItem = (event) => {
    if (event.key === "Enter" && !(event.target.value === "")) {
      let items = toDoStore[id];
      items[Object.keys(toDoStore[id]).length] = {
        text: event.target.value,
        checked: false,
      };
      updateDays(items);
      setNewItem("");
    }
  };

  // Remove item from the to-do list
  const deleteItem = (key, event) => {
    let items = toDoStore[id];
    delete items[key];
    updateDays(items);
  };

  // Toggle to-do list item between checked and unchecked
  const checkItem = (key) => {
    let items = toDoStore[id];
    items[key]["checked"] = !items[key]["checked"];
    updateDays(items);
  };

  // Creating list for list rendering form to-do items
  const rows = [];
  for (const [key, value] of Object.entries(toDoStore[id])) {
    rows.push(
      <ToDoItem
        key={key}
        elementNr={key}
        text={value.text}
        checked={value.checked}
        deleteItem={deleteItem}
        checkItem={checkItem}
      />
    );
  }

  return (
    <div className="todo-container">
      {rows}
      <input
        className="todo-item"
        type="text"
        placeholder="Enter To Do..."
        name={id}
        value={newItem}
        onChange={handleInput}
        onKeyDown={addItem}
      />
    </div>
  );
};
export default ToDo;
