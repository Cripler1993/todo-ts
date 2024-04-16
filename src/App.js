import { useState } from "react";
import ToDoFilter from "./components/ToDoFilter";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoArr, setToDoArr] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  console.log(selectedFilter);

  function filterToDo(arr) {
    if (selectedFilter == "active") {
      return arr.filter((elem) => {
        return elem.isComplete == false;
      });
    } else if (selectedFilter == "completed") {
      return arr.filter((elem) => {
        return elem.isComplete == true;
      });
    } else {
      return [...arr];
    }
  }

  const filteredToDo = filterToDo(toDoArr);
  console.log(filteredToDo);

  return (
    <div className="App">
      <div className="base">
        <ToDoHeader setToDoArr={setToDoArr} />
        <div className="container">
          <ToDoList
            toDoArr={toDoArr}
            setToDoArr={setToDoArr}
            filteredToDo={filteredToDo}
          />
          <ToDoFilter
            toDoArr={toDoArr}
            setToDoArr={setToDoArr}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
