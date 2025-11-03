
import React, { createContext, useState, useContext, useEffect } from "react";

const MyContext = createContext();


export function MyProvider({ children }) {

  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  
  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
}


export function useMyContext() {
  return useContext(MyContext);
}
