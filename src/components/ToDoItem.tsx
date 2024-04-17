import React from "react";
import { ToDoType } from "../App";
export interface ToDoItemProps {
  elem: ToDoType;
  toDoComplete: (id: number) => void;
}

export default function ToDoItem({ elem, toDoComplete }: ToDoItemProps) {
  console.log(elem);
  return (
    <div className="todo__item">
      <div className="checkbox-wrapper-15">
        <input
          onChange={() => toDoComplete(elem.id)}
          className="inp-cbx"
          id={String(elem.id)}
          type="checkbox"
          style={{ display: "none" }}
          checked={elem.isComplete}
        />
        <label className="cbx" htmlFor={String(elem.id)}>
          <span>
            <svg width="12px" height="9px" viewBox="0 0 12 9">
              <polyline points="1 5 4 8 11 1"></polyline>
            </svg>
          </span>
          <span>{elem.text}</span>
        </label>
      </div>
    </div>
  );
}
