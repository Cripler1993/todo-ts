import React from "react";
import ToDoItem from "./ToDoItem";
import { ToDoType } from "../App";
export interface ToDoListProps {
  toDoComplete: (id: number) => void;
  filteredToDo: ToDoType[];
}

export default function ToDoList({
  toDoComplete,
  filteredToDo,
}: ToDoListProps) {
  return (
    <div>
      {filteredToDo.map((elem: ToDoType) => {
        return (
          <ToDoItem key={elem.id} elem={elem} toDoComplete={toDoComplete} />
        );
      })}
    </div>
  );
}
