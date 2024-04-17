import React, { useState } from "react";
interface ToDoHeaderProps {
  addToDoItem: (pText: string) => void;
}

export default function ToDoHeader({ addToDoItem }: ToDoHeaderProps) {
  const [text, setText] = useState<string>("");
  return (
    <header>
      <div className="container">
        <h1 className="header__title">todos</h1>
        <div className="header__row">
          <svg
            onClick={() => addToDoItem(text)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00039 9.59203L3.70328 5.29492L2.28906 6.70914L8.00039 12.4205L13.7117 6.70914L12.2975 5.29492L8.00039 9.59203Z"
              fill="rgba(198, 190, 190, 0.505)"
            />
          </svg>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="what's need to be done"
          />
        </div>
      </div>
    </header>
  );
}
