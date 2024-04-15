import { useState } from "react";
import ToDoFilter from "./components/ToDoFilter";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoArr, setToDoArr] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <div className="App">
      <ToDoHeader setToDoArr={setToDoArr} />
      <ToDoList toDoArr={toDoArr} setToDoArr={setToDoArr} />
      <ToDoFilter
        setToDoArr={setToDoArr}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
}

export default App;
