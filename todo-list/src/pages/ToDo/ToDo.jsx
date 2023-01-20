import React from "react";
import { useParams } from 'react-router-dom'
import './ToDo.css'
import ToDoItem from "./components/ToDoItrem/ToDoItem";

const ToDo = () => {
    const {id} = useParams();
    return (
        <div className="todo-container">
            <h1>To Do List - Day {id}</h1>
            <ToDoItem text='Datenmanagement'/>
        </div>
    );
};
export default ToDo;