import "./ToDoItem.css";

const ToDoItem = ({ elementNr, text, checked, deleteItem, checkItem }) => {
  return (
    <div className="todo-item">
      <div className="align-left">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => checkItem(elementNr)}
        />
        <h3 className={checked ? "text-checked" : ""}>{text}</h3>
      </div>
      <div className="align-right">
        <button onClick={(e) => deleteItem(elementNr, e)}>Delete</button>
      </div>
    </div>
  );
};
export default ToDoItem;
