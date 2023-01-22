import  React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import './ToDo.css'
import ToDoItem from "./components/ToDoItrem/ToDoItem";

const ToDo = ({ updateDays, toDoStore }) => {
    const {id} = useParams();
    const [newItem, setNewItem] = useState("")

    const handleChange = event => {
        setNewItem(event.target.value);
        };

    const addItem = (event) => {
        if ((event.key === 'Enter') && !(event.target.value === '')) {
            let items = toDoStore[id];
            items.push(event.target.value);
            updateDays(items);
            setNewItem("");   
        }
    }

    const deleteItem = () => {
        
    }
    const rows = [];
    toDoStore[id].forEach(element => {
        rows.push(<ToDoItem text={element} deleteItem={deleteItem}/>);
    });
        
    return (
        <div className="todo-container">
            <h1>To Do List - Day {id}</h1>
            <div className="todo-container">
                {rows}
                <input className="todo-item" type="text" placeholder="Enter To Do..." name={id} value={newItem} onChange={handleChange} onKeyDown={addItem}/>    
            </div>
        </div>
    );
};
export default ToDo;