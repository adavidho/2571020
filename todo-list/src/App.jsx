// Matr. Nr. 2571020

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CalendarView from "./pages/Calendar/Calendar";
import ToDo from "./pages/ToDo/ToDo";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  // Central data object, one item for each day (key - day: value - list)
  let [toDoStore, setToDoStore] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
  });

  // Function used to update the to-do list of a given day
  const updateDays = (newDay) => {
    let updatedValue = {};
    updatedValue = { id: newDay };
    setToDoStore((toDoStore) => ({
      ...toDoStore,
      ...updatedValue,
    }));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalendarView toDoStore={toDoStore} />} />
        <Route
          path="/todo/:id"
          element={<ToDo updateDays={updateDays} toDoStore={toDoStore} />}
        />
      </Routes>
    </div>
  );
};

export default App;
