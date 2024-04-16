import React from "react";

export default function ToDoItem({ elem, setToDoArr }) {
  function toDoComplete(id) {
    setToDoArr((prev) =>
      prev.map((element) => {
        if (element.id == id) {
          element.isComplete = true;
        }
        return element;
      })
    );
  }
  console.log(elem);
  return (
    <div className="todo__item">
      <div className="checkbox-wrapper-15">
        <input
          disabled={elem.isComplete == true}
          onClick={() => toDoComplete(elem.id)}
          className="inp-cbx"
          id={elem.id}
          type="checkbox"
          style={{ display: "none" }}
        />
        <label className="cbx" for={elem.id}>
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
