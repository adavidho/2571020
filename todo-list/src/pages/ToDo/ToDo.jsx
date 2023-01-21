import {useState,React} from 'react';
import { useParams } from 'react-router-dom'
import './ToDo.css'
import ToDoItem from "./components/ToDoItrem/ToDoItem";

const ToDo = () => {
    const {id} = useParams();
    let [toDoStore, setToDoStore] = useState({
        1:["g","d"], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 
        8:[], 9:[], 10:[], 11:[], 12:[], 13:[], 14:[], 
        15:[], 16:[], 17:[], 18:[], 19:[], 20:[], 21:[],
        22:[], 23:[], 24:[], 25:[], 26:[], 28:[]
    });
    const onChangeHandler = event => {
        setToDoStore(event.target.value);
    };

    const rows = [];
    for (let i = 0; i < toDoStore[id]; i++) {
        rows.push(<ToDoItem text='g'/>);
    }

    return (
        <div className="todo-container">
            <h1>To Do List - Day {id}</h1>
            <div className="todo-container">
                {rows}
                <input
                    type="text"
                    name="new-to-do"
                    onChange={onChangeHandler}
                    value={toDoStore}
                />
            </div>;
            
        </div>
    );
};
export default ToDo;