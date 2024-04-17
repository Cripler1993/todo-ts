import React, { useState } from "react";
import ToDoFilter from "./components/ToDoFilter";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";

export type SelectedType = "all" | "active" | "completed";
export interface ToDoType {
  isComplete: boolean;
  id: number;
  text: string;
}

function App() {
  const [toDoArr, setToDoArr] = useState<ToDoType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<SelectedType>("all");
  console.log(selectedFilter);

  function filterToDo(arr: ToDoType[]) {
    if (selectedFilter != "all") {
      return arr.filter((elem) => {
        if (selectedFilter == "active") {
          return elem.isComplete == false;
        }
        return elem.isComplete == true;
      });
    } else {
      return arr;
    }
  }

  function toDoComplete(id: number) {
    setToDoArr((prev) =>
      prev.map((element) => {
        if (element.id == id) {
          element.isComplete = !element.isComplete;
        }
        return element;
      })
    );
  }

  function addToDoItem(pText: string) {
    setToDoArr((prev) => [
      ...prev,
      { isComplete: false, id: Date.now(), text: pText },
    ]);
  }

  function clearToDo() {
    setToDoArr((prev) =>
      prev.filter((elem) => {
        return elem.isComplete == false;
      })
    );
  }

  const filteredToDo = filterToDo(toDoArr);
  console.log(filteredToDo);

  return (
    <div className="App">
      <div className="base">
        <ToDoHeader addToDoItem={addToDoItem} />
        <div className="container">
          <ToDoList toDoComplete={toDoComplete} filteredToDo={filteredToDo} />
          <ToDoFilter
            toDoArr={toDoArr}
            clearToDo={clearToDo}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
