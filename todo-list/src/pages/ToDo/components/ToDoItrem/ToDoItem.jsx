// import "./ToDoItem.css"

const ToDoItem = ({text}) => {
    return (
        <div className="todo-item">
            <h3>{text}</h3>
        </div>
    );
};
export default ToDoItem