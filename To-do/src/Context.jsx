import React, { createContext, useState, useEffect, useRef } from "react";

const AppContext = createContext();

export function ProviderFunc({ children }) {
  const [inputt, setInput] = useState("");
  const [task, setTask] = useState([]);
  const reff = useRef();

  useEffect(() => {
    setTimeout(() => {
      reff.current?.focus();
    }, 3000);
  }, []);

  return (
    <AppContext.Provider value={{ inputt, setInput, task, setTask, reff }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
