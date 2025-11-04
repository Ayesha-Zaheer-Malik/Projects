import React, { useContext } from "react";
import AppContext from "./Context";

export function Input() {
  const { inputt, setInput, task, setTask, reff } = useContext(AppContext);
 
  const addTask = () => {
    
    const newTask = { id: Date.now(), text: inputt, done: false };
    setTask([...task, newTask]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        ref={reff}
        placeholder="Task here..."
        value={inputt}
        onChange={(e) => setInput(e.target.value)}
      />
     
      <button onClick={addTask}>Add Task</button>
    </>
  );
}
