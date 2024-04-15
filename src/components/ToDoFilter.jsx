import React from "react";
import { filters } from "../utils/constants";

export default function ToDoFilter({
  selectedFilter,
  setSelectedFilter,
  setToDoArr,
}) {
  function clearToDo() {
    setToDoArr(() => []);
  }
  return (
    <div>
      <span>2 items left</span>
      {filters.map((elem, index) => {
        return (
          <button
            onClick={() => setSelectedFilter(elem.value)}
            className={elem.value == selectedFilter ? "btn active" : "btn"}
            key={index}
          >
            {elem.label}
          </button>
        );
      })}
      <button onClick={() => clearToDo()}>clear completed</button>
    </div>
  );
}
