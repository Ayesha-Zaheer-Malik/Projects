import React, { useEffect, useRef } from "react";
import { MyProvider, useMyContext } from "./useContext";
import DisplayName from "./DisplayChild";

function Input() {

  const { name, setName } = useMyContext(); 
  const reff= useRef()
   useEffect(() => {
    setInterval(() => {
      if (reff.current) {
        reff.current.focus();
      }
    }, 3000);
  },[])
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        useRef={reff}
        onChange={(e) => setName(e.target.value) 
        
        }
      />
      <p>name is: {name}</p>
    </div>
  );
}

export default function App() {
  return (
    <MyProvider>
      <h1>React Hooks</h1>
      <Input />
      <DisplayName />
    </MyProvider>
  );
}
