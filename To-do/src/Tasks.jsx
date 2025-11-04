import React, { useContext } from "react";
import AppContext from "./Context";

export function Display() {
  const { task, setTask } = useContext(AppContext);

  const onDone = (id) => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const onRemove = (id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ul className="task-list">
      {task.map((t) => (
        <li key={t.id} className="task-item">
          <span
            style={{
              textDecoration: t.done ? "line-through" : "none",
              color: t.done ? "gray" : "black",
            }}
          >
            {t.text}
          </span>
          <div>
            {!t.done && (
              <>
                <button onClick={() => onDone(t.id)}>Done</button>
                <button onClick={() => onRemove(t.id)}>Remove</button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
