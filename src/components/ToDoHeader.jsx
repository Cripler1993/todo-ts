import React, { useState } from "react";

export default function ToDoHeader({ setToDoArr }) {
  function addToDoItem(pText) {
    setToDoArr((prev) => [
      ...prev,
      { isComplete: false, id: Date.now(), text: pText },
    ]);
  }
  const [text, setText] = useState("");
  return (
    <div>
      <button onClick={() => addToDoItem(text)}>добавить</button>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
    </div>
  );
}
