import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoArr, setToDoArr }) {
  return (
    <div>
      {toDoArr.map((elem) => {
        return <ToDoItem key={elem.id} elem={elem} setToDoArr={setToDoArr} />;
      })}
    </div>
  );
}
