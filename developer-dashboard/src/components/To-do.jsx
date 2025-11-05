import { useState, useRef, useEffect, useCallback } from "react";

export function Todo() {
    console.log("to do loggg...")


   
  const [inputt, setInput] = useState("");
  const [task, setTask] = useState([]);
  const reff = useRef();

  useEffect(() => {
    setTimeout(() => {
      reff.current?.focus();
    }, 3000);
  }, []);

  const addTask = () => {
    if (inputt.trim() === "") return;
    
    const newTask = { id: Date.now(), text: inputt, done: false };
    setTask([...task, newTask]);
    setInput("");
  };

  const onDone = (id) => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };


  

  const onRemove = useCallback((id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  },[user]);

  return (
    <>
    <h2>Add a Todo</h2>
    <div className="task-container">
      <input id="todo-input"
        type="text"
        ref={reff}
        placeholder="Task here..."
        value={inputt}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
     
      <button onClick={addTask} id="todo-btn">Add</button>
</div>
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
              {t.done && (
                <button onClick={() => onRemove(t.id)}>Remove</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;