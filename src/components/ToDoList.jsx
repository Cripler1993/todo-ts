import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoArr, setToDoArr, filteredToDo }) {
  return (
    <div>
      {filteredToDo.map((elem) => {
        return <ToDoItem key={elem.id} elem={elem} setToDoArr={setToDoArr} />;
      })}
    </div>
  );
}
