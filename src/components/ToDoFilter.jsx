import React from "react";
import { filters } from "../utils/constants";

export default function ToDoFilter({
  selectedFilter,
  setSelectedFilter,
  setToDoArr,
  toDoArr,
}) {
  let toDoItemsLeft = toDoArr.filter((elem) => {
    return elem.isComplete == false;
  });
  console.log(toDoItemsLeft);
  function clearToDo() {
    setToDoArr(() => []);
  }
  return (
    <div>
      <span>{toDoItemsLeft.length}items left</span>
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
