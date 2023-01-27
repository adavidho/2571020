// Matr. Nr. 2571020

const CalenderTile = ({ day, toDoStore }) => {
  let numToDos = "";
  if (day in toDoStore) {
    numToDos = Object.keys(toDoStore[day]).length;
  }

  return <p>to-dos: {numToDos}</p>;
};
export default CalenderTile;
