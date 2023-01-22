import React from 'react';
import { useParams } from 'react-router-dom'
import './ToDo.css'
import ToDoItem from "./components/ToDoItrem/ToDoItem";

const ToDo = ({ updateDays, toDoStore }) => {
    const {id} = useParams();
    // let [toDoStore, setToDoStore] = useState({
    //     1:["clean house", "go fish"], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 
    //     8:[], 9:[], 10:[], 11:[], 12:[], 13:[], 14:[], 
    //     15:[], 16:[], 17:[], 18:[], 19:[], 20:[], 21:[],
    //     22:[], 23:[], 24:[], 25:[], 26:[], 28:[]
    // });
   
    // console.log(toDoStore[id]);
    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //     console.log('do validate')
    //     setToDoStore(...toDoStore, {id:event.target.value})
    //     }
    // }

    // const updateDays = (newDay) => {
    //     let updatedValue = {};
    //     updatedValue = {id:newDay};
    //     setToDoStore(toDoStore => ({
    //          ...toDoStore,
    //          ...updatedValue
    //        }));
    // }
    
    const addItem = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate')
            let items = toDoStore[id]
            items.push(event.target.value)
            updateDays(items)
        }
    }
    const rows = [];
    toDoStore[id].forEach(element => {
        rows.push(<ToDoItem text={element}/>);
    });
        
    return (
        <div className="todo-container">
            <h1>To Do List - Day {id}</h1>
            <div className="todo-container">
                {rows}
                <input type="text" name={id} onKeyDown={addItem}/>    
            </div>
        </div>
    );
};
export default ToDo;