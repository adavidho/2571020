// import "./ToDoItem.css"

const ToDoItem = ({day}) => {
    return (
        <div className="item-container">
            <h1>Daily To Do {day}</h1>
        </div>
    );
};
export default ToDoItem