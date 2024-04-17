import React from "react";
import { filters } from "../utils/constants";
import { SelectedType, ToDoType } from "../App";

interface ToDoFilterProps {
  selectedFilter: SelectedType;
  setSelectedFilter: (str: SelectedType) => void;
  clearToDo: () => void;
  toDoArr: ToDoType[];
}

export default function ToDoFilter({
  selectedFilter,
  setSelectedFilter,
  clearToDo,
  toDoArr,
}: ToDoFilterProps) {
  let toDoItemsLeft = toDoArr.filter((elem) => {
    return elem.isComplete == false;
  }).length;

  return (
    <div className="toDo__filter">
      <span>{toDoItemsLeft} items left</span>
      <div className="filter__btns">
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
      </div>
      <button className="filter__clear-btn" onClick={() => clearToDo()}>
        clear completed
      </button>
      <div className="after">
        <div className="after__first"></div>
        <div className="after__second"></div>
      </div>
    </div>
  );
}
