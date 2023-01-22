import "./ToDoItem.css"

const ToDoItem = ({ elementNr, text, deleteItem}) => {
    return (
        <div className="todo-item">
            <div className="align-left">
                <input type="checkbox" checked="checked" readOnly="True"/>
                <h3>{text}</h3>
            </div>
            <div className="align-right">
                <button onClick={(e) => deleteItem(elementNr, e)}>Delete</button>
            </div>
            
        </div>
    );
};
export default ToDoItem